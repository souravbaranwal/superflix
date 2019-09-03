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
    let firstFiveVideo = this.state.movies.slice(index, index + 6);
    if (firstFiveVideo.length < 6) {
      firstFiveVideo = firstFiveVideo.concat(
        this.state.movies.slice(0, 6 - firstFiveVideo.length)
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
