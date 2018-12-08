import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <span className={this.conditionBadge()}>
          {this.props.product.value}
        </span>
        <button
          className="btn  btn-sm m-1 btn-dark"
          onClick={() => {
            this.props.onIncreament(this.props.product);
          }}
        >
          Add to cart
        </button>

        <button
          className="btn btn-sm m-1 btn-dark"
          onClick={() => {
            this.props.onDecreament(this.props.product);
          }}
        >
          Remove
        </button>

        <button
          className="btn btn-sm btn-dark m-1"
          onClick={() => {
            this.props.onDelete(this.props.product);
          }}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  conditionBadge() {
    let con = "badge m-2 badge-";
    con += this.props.product.value === 0 ? "warning" : "primary";
    return con;
  }
}

export default Counter;
