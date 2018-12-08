import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

class LogedIn extends Component {
  render() {
    return (
      <div>
        <Router>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/user/Additem">
                Add New Item
              </a>
            </li>
            <input
              className="btn btn-danger navbar-btn navbar-right"
              type="button"
              className="btn btn-sm btn-danger m-1"
              value={this.props.logedIn ? "Log out" : "Log in"}
              onClick={this.props.onHello}
            />
          </ul>
        </Router>
      </div>
    );
  }
}

export default LogedIn;
