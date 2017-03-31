import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import UserListContainer from './components/containers/user-list-container';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={UserListContainer}>
    </Route>
  </Router>
);
