import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/home';
import NavTabContainer from './components/containers/nav-tab-container';
import ContentContainer from './components/containers/content-container';
import UserListContainer from './components/containers/user-list-container';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Home}>
        <IndexRoute components={{userList: UserListContainer}}/>
        <Route path=':userId/:content' components={{userList: UserListContainer,
            navTab: NavTabContainer, content: ContentContainer}}>
        </Route>

    </Route>
  </Router>
);
