import React from 'react';

class UserList extends React.Component{

    render(){
        let users = [];
        this.props.userList.forEach(user => {
            users.push(<p> {user['name']}</p>);
        });

        return (
            <div>
                {users}
            </div>
        );
    }
}

export default UserList;
