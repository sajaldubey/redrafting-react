import React, { Component } from "react";

class Clicker extends Component {
  state = {
    number: 1,
  };
  genRandom = () => {
    let num = Math.floor(Math.random() * 10) + 1;
    this.setState({
      number: num,
    });
  };
  render() {
    // can write html inside jsx brackets
    return (
      <div>
        <p>Number is: {this.state.number}</p>
        {this.state.number === 7 ? (
          <p>You Won!! </p>
        ) : (
          <button onClick={this.genRandom}>Randomize</button>
        )}
      </div>
    );
  }
}

export default Clicker;
