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
            <div
              className="img-container"
              style={{
                backgroundImage:
                  "url(" +
                  `https://image.tmdb.org/t/p/original/${this.state.movie.backdrop_path}` +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="img-content">
                <h2>{this.state.movie.original_title}</h2>
                <p>{this.state.movie.release_date}</p>
                <p className="overview">{this.state.movie.overview}</p>
              </div>
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