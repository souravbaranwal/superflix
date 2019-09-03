import React, { Component } from "react";
import Slider from "./Slider";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      movies: null
    };
  }

  componentDidMount() {
    this.setState({
      movie: this.props.location.state.movie
    });
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.location.state.movie.id}/similar?api_key=aebe3910ab68767bd5047cf76f34c313&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(({ results }) => this.setState({ movies: results }));
  }
  render() {
    // if (this.state.movies) {
    //   let {
    //     title,
    //     original_language,
    //     overview,
    //     poster_path,
    //     vote_average
    //   } = this.state.movie;
    // }

    return (
      <>
        {this.state.movies && (
          <div className="movieContainer">
            <div className="movie-info">
              <img
                src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`}
                alt=""
              />
            </div>
            <Slider movieList={this.state.movies} />
          </div>
        )}
      </>
    );
  }
}

export default Movie;
