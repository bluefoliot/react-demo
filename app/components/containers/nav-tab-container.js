import React from 'react';
import {connect} from 'react-redux';
import * as commonApi from '../../api/common-api';
import NavTab from '../views/nav-tab';

const NavTabContainer = React.createClass({
    render: function(){
        return (
            <NavTab {...this.props}/>
        )
    }
});

export default NavTabContainer;
