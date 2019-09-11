import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

import Slider from "./Slider";
import SliderPlaceholder from "./SliderPlaceholder";

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
    return (
      <>
        {this.state.movies ? (
          <div className="moviePageContainer">
            <div className="movie-info">
              <div className="movie-info-child-left ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`}
                  alt=""
                />
              </div>
              <div className="movie-info-child-right ">
                <h6>{this.state.movie.title}</h6>
                <p>
                  <strong>Rating: </strong>
                  {this.state.movie.vote_average}
                </p>
                <p>
                  <strong>Release Date: </strong>
                  {this.state.movie.release_date}
                </p>
                <p>
                  <strong>Overview: </strong>
                  {this.state.movie.overview}
                </p>

                <div className="buttons-movie">
                  <button type="button " className="btn2 btn-primary2">
                    Play
                  </button>
                  <button type="button " className="btn2 btn-primary2">
                    + My List
                  </button>
                </div>
              </div>
            </div>
            <div className="title-movie-component">
              <h6>Similar Movies</h6>
            </div>

            <Slider movieList={this.state.movies} />
          </div>
        ) : (
          <div className="moviePageContainer">
            <div className="movie-info">
              <div className="movie-info-child-left ">
                <div className="imagePlaceholder"></div>
                <Skeleton height={600} width={400} />
              </div>
              <div className="movie-info-child-right ">
                <h6>
                  <Skeleton />
                </h6>
                <p>
                  <strong>Rating: </strong>
                  <Skeleton />
                </p>
                <p>
                  <strong>Release Date: </strong>
                  <Skeleton />
                </p>
                <p>
                  <strong>Overview: </strong>
                  <Skeleton />
                </p>

                <div className="buttons-movie">
                  <button type="button " className="btn2 btn-primary2">
                    Play
                  </button>
                  <button type="button " className="btn2 btn-primary2">
                    + My List
                  </button>
                </div>
              </div>
            </div>
            <div className="title-movie-component">
              <h6>
                <Skeleton />
              </h6>
            </div>

            <SliderPlaceholder />
          </div>
        )}
      </>
    );
  }
}

export default Movie;
