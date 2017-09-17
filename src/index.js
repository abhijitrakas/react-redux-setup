import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.js';
import configureStore from './store/configureStore';
import * as userActions from './actions/users/createUsers'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const store = configureStore();
store.dispatch(userActions.createUser());


ReactDOM.render(
    <Provider store={store}>
        <Router><App /></Router>
    </Provider>,
    document.getElementById('root')
);
