import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <header>
          <NavLink to="/">
            <h4 className="logo">SuperFlix</h4>
          </NavLink>
          <nav>
            <ul className="nav-links">
              <li>
                <NavLink exact activeClassName="active " className="" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active " className="" to="/search">
                  Search
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
