import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./Game";

class App extends Component {
  render() {
    return (
      <div>
        <Game rows={5} columns={5} activeCellsCount={6} />
      </div>
    );
  }
}

export default App;
