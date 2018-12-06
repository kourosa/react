import React, { Component } from "react";

class NewItem extends Component {
  show(a) {
    console.log(a);
  }
  render() {
    return (
      <div className="col-6 m-1" style={{ backgroundColor: "silver" }}>
        <form>
          <label>
            <strong>Add item:</strong>
            <input type="text" name="name" onChange={this.props.onChange} />
          </label>
          <button
            type="button"
            className="btn btn-light btn-sm"
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
