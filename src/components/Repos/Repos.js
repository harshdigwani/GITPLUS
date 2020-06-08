import React, { Component } from 'react';
import { getRepos } from '../../services/Repos';
import Spinner from '../Core/Spinner';
import Repo from './Repo';
import './Repos.css';
import Base from '../Base/Base';
import Pagination from '../Pagination/Pagination';

class Repos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            repos: [],
            currPage: 1,
            itemsPerPage: 15,
            totalItems: 0
        };
    }

    getRepositories = async () => {
        try {
            console.log("het")
            this.setState({ loading: true });
            const repos = await getRepos();
            this.setState({
                repos: repos.items,
                totalItems: repos.items.length,
                loading: false
            })

        }
        catch (err) {
            console.log(err);
        }
    }

    async componentDidMount() {
        this.getRepositories();
    }

    paginate = (num) => {
        this.setState({ currPage: num })
        console.log("paginate", this.state)
        if (this.state.currPage >= this.state.currPage * this.state.itemsPerPage) this.getRepositories();
    };

    render() {
        const indexOfLastItem = this.state.currPage * this.state.itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
        const repos = this.state.repos.slice(indexOfFirstItem, indexOfLastItem);

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
                <Pagination itemsPerPage={this.state.itemsPerPage}
                    totalItems={this.state.totalItems}
                    paginate={this.paginate}
                    currPage={this.state.currPage} />
            </Base>
        )
    }
}

export default Repos