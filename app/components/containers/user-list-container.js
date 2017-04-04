import React from 'react';
import {connect} from 'react-redux';
import * as commonApi from '../../api/common-api';
import {browserHistory} from 'react-router';
import UserList from '../views/user-list';

const UserListContainer = React.createClass({
    componentDidMount: function() {
        this.props.dispatch(commonApi.loadUserList());
    },

    changeUser: function(e){
        let content = 'post';
        if(this.props.params.content){
            content = this.props.params.content;
        }
        browserHistory.push('/'+e.target.value+'/'+content);
    },

    render: function() {
        return (
            <UserList {...this.props} changeUser={this.changeUser} />
        );
    }
});

const mapStateToProps = store => {
    return {
        userList: store.userState.userList,
        userId: store.userState.userId
    };
}

export default connect(mapStateToProps)(UserListContainer);
