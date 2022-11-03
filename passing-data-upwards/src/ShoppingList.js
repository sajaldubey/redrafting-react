import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ productname: "apple", qty: "2" }],
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    this.setState((state) => ({
      items: [...state.items, item],
    }));
  }
  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li>
            {item.productname}:{item.qty}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </>
    );
  }
}

export default ShoppingList;
