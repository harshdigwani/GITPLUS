import React, { Component } from 'react';
import { getOrgs } from '../../services/Organisation';
import Spinner from '../Core/Spinner';
import './Organisation.css';
import Base from '../Base/Base';
import Org from './Org';

class Organisation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            orgs: [],
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

    render() {
        const orgs = this.state.orgs.slice(0, 15);

        return (
            <Base>
                <div>
                    <h1 className="sub-heading">Organisations</h1>
                    {this.state.loading && <Spinner />}
                    {
                        orgs && (<div className="container">
                            {Object.values(orgs.slice(0, 15))
                                .map((org) => <Org key={org.id} org={org} />)}
                        </div>)
                    }

                </div>
            </Base>
        )
    }
}

export default Organisation