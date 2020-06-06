import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <header className="navbar">
            <span className="brand">
                <img className="logo" src="../../../images/logo.png" />&nbsp;GitPlus
             </span>
            <Router>
                <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/">Home</NavLink></span>
                <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/search">Search</NavLink></span>
                <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/repos">Repositories</NavLink></span>
                <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/orgs">Organisations</NavLink></span>
                <span><NavLink className="nav-link" activeClassName="active-nav-link" to="/profiles">Profiles</NavLink></span >
            </Router >
        </header >
    )
}

export default Header