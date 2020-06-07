import React, { Component } from 'react'
import { getUser, getUserRepos } from '../../services/Users';
import Spinner from '../Core/Spinner';
import Base from '../Base/Base';
import User from './User';
import './Dashboard.css';
import Repository from './Repository';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: this.props.match.params.username,
            loading: true,
            error: false,
            user: "",
            repos: []
        };
    }


    async componentDidMount() {
        if (!this.state.username) return;

        this.setState({ loading: true });

        try {
            const user = await getUser(this.state.username);
            const repos = await getUserRepos(this.state.username);
            this.setState({
                user: user,
                repos: repos,
                loading: false
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        const { user, repos } = this.state;

        return (
            <Base>
                <div>
                    {this.state.loading && <Spinner />}
                    {user && <a target="_blank" href={user.html_url}><User user={user} /></a>}
                    <div className="bg-second">
                        {repos && (<div>
                            <h3 className="sub-heading-2">Top Repositories...</h3>
                            <div className="dashboard-container">
                                {Object.values(repos.sort((a, b) => {
                                    // sorting based to newest first
                                    if (a.created_at < b.created_at) return 1;
                                    if (a.created_at > b.created_at) return -1;
                                    else return 0;
                                }))
                                    .map(repo => < Repository key={repo.id} repo={repo} />)}
                            </div>
                        </div>)}
                    </div>
                </div>
            </Base>
        )
    }
}

export default Dashboard