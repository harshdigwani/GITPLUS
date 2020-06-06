import React, { Component } from 'react';
import { getProfiles } from '../../services/Profiles';
import Spinner from '../Core/Spinner';
import Profile from './Profile';
import Base from '../Base/Base';

class Profiles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            profiles: [],
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

    render() {
        const profiles = this.state.profiles.slice(0, 15);

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
            </Base>
        )
    }
}

export default Profiles