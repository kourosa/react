import React, { Component, lazy, Suspense, prom } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import "./App.css";
import NewItem from "./Components/NewItem";
import List from "./Components/list";
import PropTypes from "prop-types";
import Stateless from "./Components/Stateless";

const Counters = React.lazy(() => import("./Components/counters"));

class App extends Component {
  states = {
    value: "ass",
    logedIn: false,
    products: [
      { name: "Apple", id: 1, value: 1 },
      { name: "Orrange", id: 2, value: 2 },
      { name: "Kiwi", id: 3, value: 0 }
    ]
  };

  componentDidMount() {
    console.log("test did mount");
  }

  render() {
    return (
      <div dk="App" className="container-fluid">
        <input
          type="button"
          className="btn btn-sm btn-danger m-1"
          onClick={() => {
            this.states.logedIn = !this.states.logedIn;
            this.setState({ logedIn: this.states.logedIn });
            console.log(this.states.logedIn);
          }}
          value={this.states.logedIn ? "Log out" : "Log in"}
        >

        </input>

        <Router>
          <div>
            <Route
              path="/user/:id"
              exact
              render={({ match }) =>
                this.states.logedIn ? (
                  <div>
                    <Stateless paramdata={match.params} />
                    <NewItem
                      onAddProduct={this.handleAddProduct}
                      onChange={this.handleChange}
                    />
                  </div>
                ) : (
                    <Redirect to="" />
                  )
              }
            />

            <NavLink to="/user" exact activeStyle={{ color: "red" }}>
              All Users...
            </NavLink>
            <NavLink to="/user/Additem" activeStyle={{ color: "red" }}>
              Additem
            </NavLink>
          </div>
        </Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Counters
            product={this.states.products}
            onDelete={this.handleDelete}
            onAddProduct={this.handleAddProduct}
            onIncreament={this.handleIncreament}
            onDecreament={this.handleDecreament}
            onChange={this.handleChange}
          />
          <List />
        </Suspense>
      </div>
    );
  }

  handleDelete = productTobeDeleted => {
    this.states.products = this.states.products.filter(
      c => c.name !== productTobeDeleted.name
    );
    this.setState(this.states.products);
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.states.value = event.target.value;
    console.log(event.target.value);
  };

  handleAddProduct = () => {
    let item = { name: this.state.value, id: 22, value: 1 };
    this.states.products = [...this.states.products, item];
    this.setState(this.states.products);

    // this.setState(prevState => ({ products }));
  };

  handleIncreament = item => {
    const products = [...this.states.products];
    let index = products.indexOf(item);
    products[index].value++;
    this.setState(products);
  };

  handleDecreament = item => {
    let products = this.states.products;
    let index = products.indexOf(item);
    if (products[index].value > 0) products[index].value--;

    this.setState({ products });
  };
}

export default App;
