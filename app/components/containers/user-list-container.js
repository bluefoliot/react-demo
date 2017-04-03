import React from 'react';
import {connect} from 'react-redux';
import * as commonApi from '../../api/common-api';
import UserList from '../views/user-list';

const UserListContainer = React.createClass({
    componentDidMount: function() {
        this.props.dispatch(commonApi.loadUserList());
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
