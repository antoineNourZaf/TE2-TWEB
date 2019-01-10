import React, { Component } from 'react';
import {Navbar, NavbarBrand,} from 'reactstrap';
import "./HeaderBar.css";

class HeaderBar extends Component {
    render() {
        return(
            <div className="header">
            <Navbar>
              <NavbarBrand><h1>Movies Explorer</h1></NavbarBrand>
            </Navbar>
            </div>
        );
    }
}

export default HeaderBar;