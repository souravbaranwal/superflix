import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movieList,
      currentImageIndex: 0
    };
  }

  prevSlide = () => {
    const lastIndex = this.state.movies.length - 1;
    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
    this.setState({
      currentImageIndex: index
    });
  };
  nextSlide = () => {
    const lastIndex = this.state.movies.length - 1;
    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  };

  render() {
    const index = this.state.currentImageIndex;
    let firstFiveVideo = this.state.movies.slice(index, index + 5);
    if (firstFiveVideo.length < 5) {
      firstFiveVideo = firstFiveVideo.concat(
        this.state.movies.slice(0, 5 - firstFiveVideo.length)
      );
    }

    return (
      <>
        <div className="sliderParent">
          <div className="sliderChild arrow-container">
            <li className="slider-item arrow-container">
              <i class="fa fa-angle-left" onClick={this.prevSlide}></i>
            </li>
          </div>
          <div className="sliderChild">
            <ul className="slider-content">
              {firstFiveVideo.map((movie, index) => (
                <li className="slider-item">
                  <img
                    className="poster"
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt=""
                    key={index}
                  />
                  <div className="movieDetails">
                    {console.log(movie, "hi I am movie")}
                    <p className="movie-title">{movie.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="sliderChild arrow-container">
            <li className="slider-item arrow-container">
              <i class="fa fa-angle-right" onClick={this.nextSlide}></i>
            </li>
          </div>
        </div>

        {/* <ul className="slider-content">
            <li className="slider-item arrow-container">
              <img
                className="arrow"
                src={this.state.arrowPrev}
                onClick={this.prevSlide}
                alt=""
              />
            </li>

            {firstFiveVideo.map((image, index) => (
              <li className="slider-item">
                <img
                  className="poster"
                  src={`https://image.tmdb.org/t/p/w500${image.poster_path}`}
                  alt=""
                  key={index}
                />
              </li>
            ))}
            <li className="slider-item arrow-container">
              <img
                className="arrow"
                src={this.state.arrowNext}
                onClick={this.nextSlide}
                alt=""
              />
            </li>
          </ul> */}
      </>
    );
  }
}

export default Slider;
