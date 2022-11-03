import React, { Component } from "react";

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      qty: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ productname: "", qty: "" });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="productname">Name:</label>
        <input
          id="productname"
          name="productname"
          value={this.state.productname}
          onChange={this.handleChange}
        />
        <label htmlFor="qty">Quantity:</label>
        <input
          id="qty"
          name="qty"
          value={this.state.qty}
          onChange={this.handleChange}
        />
        <button>Add Item</button>
      </form>
    );
  }
}

export default ShoppingListForm;
