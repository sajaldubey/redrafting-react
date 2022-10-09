import React, { Component } from "react";
import Pokecard from "./Pokecard";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "charmender", exp: 62, type: "fire" },
      { id: 7, name: "squirtle", exp: 75, type: "water" },
      { id: 25, name: "Pikachu", exp: 111, type: "electric" },
      { id: 1, name: "Balbasaur", exp: 100, type: "grass" },
      { id: 12, name: "Butterfree", exp: 50, type: "flying" },
    ],
  };
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex - </h1>
        {this.props.pokemon.map((p) => (
          <Pokecard id={p.id} name={p.name} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
