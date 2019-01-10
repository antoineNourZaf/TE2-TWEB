import React, { Component } from 'react';
import './App.css';
import FilmGrid from '../views/FilmGrid.js';
import HeaderBar from'./HeaderBar.js';
import { connect } from 'tls';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar/>
        <Content/>      
    </div>
    );
  }
}

export default App;
