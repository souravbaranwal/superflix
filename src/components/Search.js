import React, { Component } from "react";
import Slider from "./Slider";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      searched: false,
      searchTerm: "",
      moviesSearched: []
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
        <div className="searchContainer">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="searchTerm"
              placeholder="Search with movie name.."
              onChange={this.handleChange}
              value={this.state.searchTerm}
            />
          </form>
          {/* {this.state.movies && <Slider movieList={this.state.movies} />} */
          console.log(this.state, "hi I am state in search component")}
          {this.state.searched === false ? (
            <Slider movieList={this.state.movies && this.state.movies} />
          ) : (
            <Slider
              movieList={this.state.moviesSearched && this.state.moviesSearched}
            />
          )}
        </div>
      </>
    );
  }
}

export default Search;
