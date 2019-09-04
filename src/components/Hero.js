import React, { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=aebe3910ab68767bd5047cf76f34c313&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <>
        <div className="header">Hi I am Header</div>
      </>
    );
  }
}

export default Hero;
