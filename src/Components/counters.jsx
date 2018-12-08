import React, { Component } from "react";
import Counter from "./counter";
import "./App.css";

const pStyle = {
  fontSize: '15px',
  textAlign: 'center',
  borderColor: 'silver',
  backgroundColor: 'white',
  borderStyle: 'solid',
  borderWidth: 'thin'
};

class Counters extends Component {
  componentDidMount() {
    console.log("counters did mount");
  }



  render() {
    return (
      <div className="shadow-sm   m-1 rounded" style={pStyle}>
        <h1>ITEMS</h1>
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
    );
  }
}

export default Counters;
