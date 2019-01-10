import React, { Component } from 'react';
import './App.css';
import FilmGrid from '../views/FilmGrid.js';
import HeaderBar from'./HeaderBar.js';
import { connect } from 'tls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar/>
        <main className="App-content">
          <FilmGrid/>
        </main>
      </div>
    );
  }
}

export default App;
