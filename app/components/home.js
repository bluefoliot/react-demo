import React from 'react';

const Home = React.createClass({
    render: function() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>React Demo</h1>
                    <label>Select user: </label> {this.props.userList}
                </div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Deals</a></li>
                                <li><a href="#">Stores</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    </nav>
                <div className="container">
                </div>
            </div>
        );
    }
});

export default Home;
