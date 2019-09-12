import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import { connect } from "react-redux";
import { addHeroMovie } from "../actions";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    if (!this.props.heroMovie) {
      fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=aebe3910ab68767bd5047cf76f34c313&language=en-US&page=1"
      )
        .then(res => res.json())
        .then(({ results }) => this.props.dispatch(addHeroMovie(results[1])));
    }
  }
  render() {
    if (this.props.heroMovie) {
      return (
        <>
          <div className="hero">
            <div
              className="img-container"
              style={{
                backgroundImage:
                  "url(" +
                  `https://image.tmdb.org/t/p/original/${this.props.heroMovie.backdrop_path}` +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="img-content">
                <h2>{this.props.heroMovie.original_title}</h2>
                <p>{this.props.heroMovie.release_date}</p>
                <p className="overview">{this.props.heroMovie.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="hero">
            <div className="img-container" style={{ backgroundColor: "grey" }}>
              <div className="img-content">
                <h2>
                  <Skeleton duration={0.4} />
                </h2>
                <p>
                  <Skeleton duration={0.4} />
                </p>
                <p className="overview">
                  <Skeleton duration={0.4} count={2} />
                </p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

function mapState({ heroMovie }) {
  return {
    ...heroMovie
  };
}

export default connect(mapState)(Hero);
