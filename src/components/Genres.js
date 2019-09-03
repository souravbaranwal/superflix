import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "./Slider";

class Genres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genreIDs: [
        { id: 28, name: "Action" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 12, name: "Adventure" }
      ]
    };
  }
  componentDidMount() {
    const allPromises = this.state.genreIDs.map(singleGenre => {
      return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=aebe3910ab68767bd5047cf76f34c313&with_genres=${singleGenre.id}&sort_by=popularity.desc`
      )
        .then(res => res.json())
        .then(({ results }) => results);
    });
    Promise.all(allPromises).then(res =>
      this.props.dispatch({ type: "ADD_GENRES", payload: res })
    );
  }
  render() {
    return (
      <>
        {this.props.moviesGenreList &&
          this.props.moviesGenreList.map((genre, index) => {
            return (
              <>
                <div>
                  <h6 className="genre-heading">
                    {this.state.genreIDs[index].name}
                  </h6>
                </div>
                <div>
                  <Slider movieList={genre} />
                </div>

                {/* <ul>
                  <h6>{this.state.genreIDs[index].name}</h6>

                  {genre.map((movie, index) => {
                    return <li key={index}>{movie.title}</li>;
                  })}
                </ul> */}
              </>
            );
          })}
        <ul></ul>
      </>
    );
  }
}

function mapState(store) {
  return {
    ...store.genres
  };
}

export default connect(mapState)(Genres);
