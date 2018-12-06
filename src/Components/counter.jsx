import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <span className={this.conditionBadge()}>
              {this.props.product.value}
            </span>
          </div>
          <div className="col">
            <button
              className="btn btn-light btn-sm m-1"
              onClick={() => {
                this.props.onIncreament(this.props.product);
              }}
            >
              Add to cart
            </button>

            <button
              className="btn btn-sm m-1 btn-warning"
              onClick={() => {
                this.props.onDecreament(this.props.product);
              }}
            >
              Remove
            </button>

            <button
              className="btn btn-sm btn-danger m-1"
              onClick={() => {
                this.props.onDelete(this.props.product);
              }}
            >
              Delete
            </button>
          </div>
        </div>
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
