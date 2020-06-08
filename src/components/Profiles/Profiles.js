import React, { Component } from 'react';
import { getProfiles } from '../../services/Profiles';
import Spinner from '../Core/Spinner';
import Profile from './Profile';
import Base from '../Base/Base';
import Pagination from '../Pagination/Pagination';

class Profiles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            profiles: [],
            currPage: 1,
            itemsPerPage: 15,
            totalItems: 0

        };
    }

    async componentDidMount() {
        try {
            const profiles = await getProfiles();
            this.setState({
                profiles: profiles.items,
                loading: false
            })

            console.log(profiles.items);
        }
        catch (err) {
            console.log(err);
        }
    }

    paginate = (num) => this.setState({ currPage: num });

    render() {
        const indexOfLastItem = this.state.currPage * this.state.itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
        const profiles = this.state.profiles.slice(indexOfFirstItem, indexOfLastItem);

        return (
            <Base>
                <div>
                    <h1 className='sub-heading'>Profiles</h1>
                    {this.state.loading && <Spinner />}
                    {
                        profiles && (<div className="container">
                            {Object.values(profiles.slice(0, 15))
                                .map((profile) => <Profile key={profile.id} profile={profile} />)}
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

export default Profiles