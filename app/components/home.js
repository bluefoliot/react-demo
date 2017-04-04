import React from 'react';
import { Link } from 'react-router';

const Home = React.createClass({
    render: function() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <Link to="/" className="logo"><h1>React Demo</h1></Link>
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
