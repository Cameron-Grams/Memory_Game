import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./Game";

var rows = 5,
   columns = 5,
   round = 1,
   activeCellCount = 6;

class App extends Component {
  constructor(props){
    super(props);
    this.state = { gameId: 1};
  }

  sameLevel(){
    this.setState({ gameId: this.state.gameId + 1 });
  }

  createNewGame(){
    this.setState({ gameId: this.state.gameId + 1 });
    columns += 1;
    rows += 1;
    round += 1;
  }

  render() {
    return (
      <div>
        <Game key={this.state.gameId}
              round={round}
              createNewGame={this.createNewGame.bind(this)}
              sameLevel={this.sameLevel.bind(this)}
              rows={rows} columns={columns}
              activeCellsCount={activeCellCount} />
      </div>
    );
  }
}

export default App;
