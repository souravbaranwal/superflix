import React, { Component } from "react";
import Genres from "./Genres";
import Hero from "./Hero";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Hero />
        <Genres />
      </>
    );
  }
}

export default Home;
