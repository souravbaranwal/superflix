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
          <h4 className="logo">SuperFlix</h4>
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

          {/* <h1 className="logo">SuperFlix</h1>
          <ul className="nav">
            <li className="navlink">
              <NavLink exact activeClassName="active " className="btn" to="/">
                Home
              </NavLink>
            </li>
            <li className="navlink">
              <NavLink activeClassName="active " className="btn" to="/search">
                Search
              </NavLink>
            </li>
          </ul>
          <div className="burger">
            <i className="fas fa-bars"></i>
          </div> */}
        </header>
      </>
    );
  }
}

export default Header;
