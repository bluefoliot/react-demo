import React from 'react';

class UserList extends React.Component{

    render(){
        let users = [];
        users.push(<option key={-1}> - Select user - </option>);
        this.props.userList.forEach((user, index) => {
            users.push(<option key={index} value={user['id']}> {user['name']}</option>);
        });
        let userId = '';
        if(this.props.params.userId){
            userId = this.props.params.userId;
        }

        return (
            <select value={userId} onChange={this.props.changeUser}>
                {users}
            </select>
        );
    }
}

export default UserList;
