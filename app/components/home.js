import React from 'react';

const Home = React.createClass({
    render: function() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>React Demo</h1>
                    <label>Select user: </label> {this.props.userList}
                </div>
                {this.props.navTab}
                <div className="container">
                    {this.props.content}
                </div>
            </div>
        );
    }
});

export default Home;
