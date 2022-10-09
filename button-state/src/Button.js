import React, { Component } from "react";

class Button extends Component {
  /* NEW METHOD - arrow funcion will automatically bind the state
  state = {
    clicked: false,
  };
  
  handleClick = (e) => {
    this.setState({ clicked: true });
  };
  */

  /* old method to initialise state and bind method to state
  handleClick() {
    this.setState({ clicked: true });
  }
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  */

  render() {
    return (
      <div>
        <p>{this.state.clicked ? "Clicked" : "Not Clicked"}</p>
        <button onClick={this.handleClick}>Click Me!!!!</button>
      </div>
    );
  }
}

export default Button;
