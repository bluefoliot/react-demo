import React from 'react';
import store from '../../store';
import {connect} from 'react-redux';
import * as userApi from '../../api/user-api';
import UserList from '../views/user-list';

const UserListContainer = React.createClass({
    componentDidMount: function() {
        store.dispatch(userApi.loadUserList());
    },

    render: function() {
        return (
            <UserList {...this.props} />
        );
    }
});

const mapStateToProps = store => {
    return {
        userList: store.userState.userList
    };
}

export default connect(mapStateToProps)(UserListContainer);
