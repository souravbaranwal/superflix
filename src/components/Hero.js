import React, { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   movieId: null,
      videoKey: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=aebe3910ab68767bd5047cf76f34c313&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(({ results }) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${results[0].id}/videos?api_key=aebe3910ab68767bd5047cf76f34c313&language=en-US
      `
        )
          .then(res => res.json())
          .then(data =>
            this.setState({
              videoKey: data.results[0].key,
              isLoading: true
            })
          )
      );
  }
  render() {
    if (this.state.videoKey) {
      return (
        <>
          <div className="header">
            Hi I am Header and I am working properly
            {this.state.videoKey}
          </div>
        </>
      );
    } else {
      return <>loading</>;
    }
  }
}

export default Hero;
