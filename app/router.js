import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/home';
import UserListContainer from './components/containers/user-list-container';

export default (
  <Router history={browserHistory}>
    <Route component={Home}>
        <Route path='/' components={{userList: UserListContainer}}/>
    </Route>
  </Router>
);
