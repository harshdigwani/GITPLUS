import React, { Component } from 'react';
import { getRepos } from '../../services/Repos';
import Spinner from '../Core/Spinner';
import Repo from './Repo';
import './Repos.css';
import Base from '../Base/Base';

class Repos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            repos: [],
        };
    }

    async componentDidMount() {
        try {
            const repos = await getRepos();
            this.setState({
                repos: repos.items,
                loading: false
            })

        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        const repos = this.state.repos.slice(0, 15);
        // console.log(repos[0]);
        // repos = []
        return (
            <Base>
                <div>
                    <h1 className="sub-heading">Repositories</h1>
                    {this.state.loading && <Spinner />}
                    {
                        repos && (<div className="container">
                            {Object.values(repos)
                                .map((repo) => <Repo key={repo.id} repo={repo} />)}
                        </div>)
                    }

                </div>
            </Base>
        )
    }
}

export default Repos