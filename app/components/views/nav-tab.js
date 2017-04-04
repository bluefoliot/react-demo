import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';

class NavTab extends React.Component{

    render(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <LinkContainer to={'/'+this.props.params.userId+'/post'}>
                                <NavItem>Post</NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/'+this.props.params.userId+'/todo'}>
                                <NavItem>Todo</NavItem>
                            </LinkContainer>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavTab;
