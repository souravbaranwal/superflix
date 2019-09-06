import React, { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=aebe3910ab68767bd5047cf76f34c313&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(({ results }) =>
        this.setState({
          movie: results[1]
        })
      );
  }
  render() {
    if (this.state.movie) {
      return (
        <>
          <div className="hero">
            <div className="img-container">
              <img
                src={`https://image.tmdb.org/t/p/w500/${this.state.movie.backdrop_path}`}
                alt=""
              />
            </div>
            <div className="img-content">
              <h2>This will be placed over the video</h2>
            </div>
          </div>
        </>
      );
    } else {
      return <>loading</>;
    }
  }
}

export default Hero;
