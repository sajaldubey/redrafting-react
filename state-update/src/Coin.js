import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <div>
        <i className={`fa-solid fa-${this.props.icon}`}></i>
        {/* <i className="fa-solid fa-chess-board"></i> */}
      </div>
    );
  }
}

export default Coin;
