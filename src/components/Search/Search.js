import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Search.css";
import Spinner from '../Core/Spinner';
import { searchUser } from '../../services/Users';
import history from "../../History";
import Base from '../Base/Base';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            loading: false,
            error: false,
            user: "",
            redirect: false
        };
    }


    onSearch = async (event) => {
        event.preventDefault();
        if (!this.state.username) return
        this.setState({ loading: true });
        try {
            const user = await searchUser(this.state.username);
            this.setState({
                user: user.items[0],
                loading: false
            })
            console.log(user.items[0]);
        }
        catch (err) {
            console.log(err);
        }
        history.push(`/search/${this.state.username}`);
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    render() {
        return (
            <Base>
                <div className="container">
                    {this.state.loading ? <Spinner /> : null}
                    <form>
                        <label> Search </label>
                        <input type="text"
                            onChange={this.handleChange("username")}
                        />
                        <Link to={`search/${this.state.username}`}>
                            <button onClick={this.onSearch} className="btn">Search</button>
                        </Link>
                    </form>
                </div>
            </Base>
        )
    }
}

export default Search