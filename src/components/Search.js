import React, { Component } from "react";
import Slider from "./Slider";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      searched: false,
      searchTerm: "",
      moviesSearched: null
    };
  }
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=aebe3910ab68767bd5047cf76f34c313&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(({ results }) => this.setState({ movies: results }));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchTerm !== "") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=aebe3910ab68767bd5047cf76f34c313&language=en-US&query=${this.state.searchTerm}&page=1&include_adult=false`
      )
        .then(res => res.json())
        .then(({ results }) =>
          this.setState({ moviesSearched: results, searched: true })
        );
    }
  };

  render() {
    return (
      <>
        <div className="searchContainer text-center">
          <div className="container__item container">
            <form className="form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="searchTerm"
                className="form__field"
                placeholder="Search for movie"
                onChange={this.handleChange}
                value={this.state.searchTerm}
              />
              <button type="submit" className="btn btn--primary btn--inside ">
                Submit
              </button>
            </form>
          </div>
          <div className="searchSlider">
            {this.state.searched
              ? this.state.moviesSearched && (
                  <Slider movieList={this.state.moviesSearched} />
                )
              : this.state.movies && <Slider movieList={this.state.movies} />}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
