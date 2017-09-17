import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/index';
import About from './components/about/index';
import UserView from './components/user/view';
import Users from './components/user/index';

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about-us" component={About} />
            <Route path="/user/:username" component={UserView} />
            <Route path="/users" component={Users} />
        </Switch>
    );
};

export default Routes;