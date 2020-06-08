import React, { Component } from 'react';
import { getOrgs } from '../../services/Organisation';
import Spinner from '../Core/Spinner';
import './Organisation.css';
import Base from '../Base/Base';
import Org from './Org';
import Pagination from '../Pagination/Pagination';

class Organisation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            orgs: [],
            currPage: 1,
            itemsPerPage: 15,
            totalItems: 0
        };
    }

    async componentDidMount() {
        try {
            const orgs = await getOrgs();
            this.setState({
                orgs: orgs.items,
                loading: false
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    paginate = (num) => this.setState({ currPage: num });


    render() {
        const indexOfLastItem = this.state.currPage * this.state.itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
        const orgs = this.state.orgs.slice(indexOfFirstItem, indexOfLastItem);

        return (
            <Base>
                <div>
                    <h1 className="sub-heading">Organisations</h1>
                    {this.state.loading && <Spinner />}
                    {
                        orgs && (<div className="container">
                            {Object.values(orgs)
                                .map((org) => <Org key={org.id} org={org} />)}
                        </div>)
                    }

                </div>
                <Pagination itemsPerPage={this.state.itemsPerPage}
                    totalItems={this.state.totalItems}
                    paginate={this.paginate}
                    currPage={this.state.currPage} />
            </Base>
        )
    }
}

export default Organisation