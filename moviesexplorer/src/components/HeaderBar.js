import React, { Component } from 'react';
import {Navbar, NavbarBrand,} from 'reactstrap';
import "./HeaderBar.css";
import {
    Route,
    NavLink,
    HashRouter,
    BrowserRouter
  } from "react-router-dom";
import FilmGrid from "../views/FilmGrid.js";
import UpcomingMovies from "../views/UpcomingMovies.js";

class HeaderBar extends Component {
    render() {
        return(
            <div className="header">
            <Navbar>
              <NavbarBrand><h1>Movies Explorer</h1></NavbarBrand>
              <ul>
              <li><NavLink to='/popular'>A l'affiche</NavLink></li>
              <li><NavLink to='/upcoming'>Prochainement</NavLink></li>
              </ul>
            </Navbar>
          </div>
        );
    }
}

export default HeaderBar;