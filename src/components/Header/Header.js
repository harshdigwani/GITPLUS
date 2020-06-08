import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

class Header extends Component {

    constructor() {
        super();
        this.state = {
            navbar: true
        };
    }

    render() {
        let { navbar } = this.state;

        return (
            <header className="navbar" >
                <span className="brand">
                    <img className="logo" src="../../../images/logo.png" alt="logo" />&nbsp;GitPlus
                    <button className="nav-menu fa fa-chevron-down" onClick={() => this.setState((prevState) => ({ navbar: !prevState.navbar }))} />
                </span>

                <span className={navbar ? "navbar hidden" : "navbar"}>
                    <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/">Home</NavLink></span >
                    <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/search">Search</NavLink></span>
                    <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/repos">Repositories</NavLink></span>
                    <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/orgs">Organisations</NavLink></span>
                    <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/profiles">Profiles</NavLink></span >
                </span>
            </header >
        )
    }
}
export default Header