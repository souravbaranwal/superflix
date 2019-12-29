import React, { Component } from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";



import Slider from "./Slider";
import SliderPlaceholder from "./SliderPlaceholder";
import { addMoviesGenreList } from "../actions";


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
    if (!this.props.moviesGenreList) {
      const allPromises = this.state.genreIDs.map(singleGenre => {
        return fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=aebe3910ab68767bd5047cf76f34c313&with_genres=${singleGenre.id}&sort_by=popularity.desc`
        )
          .then(res => res.json())
          .then(({ results }) => results);
      });
      Promise.all(allPromises).then(res =>
        this.props.dispatch(addMoviesGenreList(res))
      );
    }
  }
  render() {
    return (
      <>
        {this.props.moviesGenreList ? (
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
              </>
            );
          })
        ) : (
          <>
            <div>
              <h6 className="genre-heading">
                <Skeleton width={80} duration={3} />
              </h6>
            </div>
            <div>
              <SliderPlaceholder />
            </div>
            <div>
              <h6 className="genre-heading">
                <Skeleton width={92} />
              </h6>
            </div>
            <div>
              <SliderPlaceholder />
            </div>
            <div>
              <h6 className="genre-heading">
                <Skeleton width={80} />
              </h6>
            </div>
            <div>
              <SliderPlaceholder />
            </div>
            <div>
              <h6 className="genre-heading">
                <Skeleton width={90} />
              </h6>
            </div>
            <div>
              <SliderPlaceholder />
            </div>
          </>
        )}
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
