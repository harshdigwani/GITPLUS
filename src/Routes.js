import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import App from './App';
import Search from './components/Search/Search';
import history from './History';
import Dashboard from './components/Dashboard/Dashboard';
import Organisation from './components/Organisation/Organisation';
import Profiles from './components/Profiles/Profiles';
import Repos from './components/Repos/Repos';

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/app" component={App} />
                <Route exact path="/" component={Home} />
                <Route exact path="/search/:username" component={Dashboard} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/orgs" component={Organisation} />
                <Route exact path="/profiles" component={Profiles} />
                <Route exact path="/repos" component={Repos} />
            </Switch>
        </Router>
    )
}

export default Routes