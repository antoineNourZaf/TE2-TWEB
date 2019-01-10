import React, { Component } from 'react';
import love from './love.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={love} className="App-love" alt="love" />
          <p>
            Bonjour mon coeur
          </p>
          <u
          >
            Tu me manques beaucoup !
          </u>
        </header>
      </div>
    );
  }
}

export default App;
