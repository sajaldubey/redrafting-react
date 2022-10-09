import { Component } from "react";
import "./Pokecard.css";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
  render() {
    let imgSource = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="Pokecard">
        <p>{this.props.name}</p>
        <img src={imgSource} alt={this.props.name} />
      </div>
    );
  }
}

export default Pokecard;
