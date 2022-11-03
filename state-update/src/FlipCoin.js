import React, { Component } from "react";
import Coin from "./Coin";

class FlipCoin extends Component {
  state = {
    headCount : 0,
    tailCount : 0,
    flipCount : 0,
    coinFace : null
  };
  static defaultProps = {
    coins : [
      {}
    ]
  }

  render() {
    

    return (
      <div>
        <h1>Inside FlipCoin pt 2</h1>
        <Coin icon={icons[0]} />
      </div>
    );
  }
}

export default FlipCoin;
