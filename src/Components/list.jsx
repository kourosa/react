import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [1, 3, 4]
    };
  }
  componentDidMount() {}

  render() {
    return (
      <ul>
        {this.state.values.map(c => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    );
  }
}

export default List;
