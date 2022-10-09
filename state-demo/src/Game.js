import React, { Component } from "react";

class Game extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       score: 0,
  //       gameOver: false,
  //     };
  //   }

  // if app is made using CRA then new syntax to initialse state
  // doesnt require constructor to initialise state
  state = {
    score: 0,
    gameOver: 0,
  };
  render() {
    return <>Your score is: {this.state.score}</>;
  }
}

export default Game;
