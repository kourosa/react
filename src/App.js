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
import PropTypes from "prop-types";
import LoginButton from "./Components/LoginButton";

const Counters = React.lazy(() => import("./Components/counters"));

class App extends Component {
  state = {
    user: "Kouros",
    value: "ass",
    counter: 1,
    loginValue: "LogIn",
    logedIn: false,
    products: [
      { name: "Apple", id: 1, value: 1 },
      { name: "Orrange", id: 2, value: 2 },
      { name: "Kiwi", id: 3, value: 0 }
    ]
  };

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.handleIncreament = this.handleIncreament.bind(this);
    this.handleDecreament = this.handleDecreament.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  render() {
    return (
      <div dk="App" className="container-fluid">
        <LoginButton
          logedIn={this.state.logedIn}
          useName={this.state.useName}
          onHello={this.handleLogin}
        />

        <Router>
          <div>
            <Route
              path="/user/:id"
              exact
              render={({ match }) =>
                this.state.logedIn ? (
                  <div>
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
            <ul>
              <li>
                <NavLink to="/user" exact activeStyle={{ color: "red" }}>
                  All Users...
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user/Additem"
                  exact
                  activeStyle={{ color: "red" }}
                >
                  Additem
                </NavLink>
              </li>
            </ul>
            <NavLink to="/user" exact activeStyle={{ color: "red" }}>
              All Users...
            </NavLink>
            <NavLink to="/user/Additem" exact activeStyle={{ color: "red" }}>
              Additem
            </NavLink>
          </div>
        </Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Counters
            product={this.state.products}
            onDelete={this.handleDelete}
            onAddProduct={this.handleAddProduct}
            onIncreament={this.handleIncreament}
            onDecreament={this.handleDecreament}
            onChange={this.handleChange}
          />
        </Suspense>
      </div>
    );
  }

  handleLogin = () => {
    {
      console.log("handleLogin");
      this.setState(prevState => ({ logedIn: !prevState.logedIn }));
    }
  };

  handleDelete = productTobeDeleted => {
    this.state.products = this.state.products.filter(
      c => c.name !== productTobeDeleted.name
    );
    this.setState(this.state.products);
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.state.value = event.target.value;
  };

  handleAddProduct = () => {
    let item = { name: this.state.value, id: 22, value: 0 };
    let products = [...this.state.products, item];
    this.setState(prevState => ({ products }));
  };

  handleLogin = () => {
    {
      console.log("handleLogin");
      this.setState(prevState => ({ logedIn: !prevState.logedIn }));
    }
  };

  handleIncreament = item => {
    const products = [...this.state.products];
    let index = products.indexOf(item);
    products[index].value++;
    this.setState(products);
  };

  handleDecreament = item => {
    let products = this.state.products;
    let index = products.indexOf(item);
    if (products[index].value > 0) products[index].value--;
    this.setState({ products });
  };

  componentDidMount() {
    console.log(" did mountd ");
  }
}

export default App;
