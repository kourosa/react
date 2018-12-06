import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  componentDidMount() {
    console.log("counters did mount");
  }

  render() {
    return (
      <div>
        <div className="col-6 m-1" style={{ backgroundColor: "silver" }}>
          <h1>Products</h1>
          <ul>
            {this.props.product.map(product => (
              <li key={product.name}>
                {product.name}
                <Counter
                  key={product.id}
                  product={product}
                  onDelete={this.props.onDelete}
                  onIncreament={this.props.onIncreament}
                  onDecreament={this.props.onDecreament}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Counters;
