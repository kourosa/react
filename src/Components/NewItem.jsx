import React, { Component } from "react";

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log('props new item:', this.props);
  }

  render() {

    return (
      <div >
        <form>
          <label>
            <strong>Add item:</strong>
            <input type="text" name="name" onChange={this.props.onChange} />
          </label>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.props.onAddProduct}
          >
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default NewItem;
