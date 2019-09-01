import React, { Component } from "react";
import Genres from "./Genres";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Genres />
      </>
    );
  }
}

export default Home;
