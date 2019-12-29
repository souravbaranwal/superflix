import React, { Component } from "react";
import { Link } from "react-router-dom";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movieList,
      currentImageIndex: 0
    };
  }

  prevSlide = () => {
    const lastIndex = this.props.movieList.length - 1;
    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
    this.setState({
      currentImageIndex: index
    });
  };
  nextSlide = () => {
    const lastIndex = this.props.movieList.length - 1;
    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  };

  render() {
    const index = this.state.currentImageIndex;
    let firstFiveVideo = this.props.movieList.slice(index, index + 5);
    if (firstFiveVideo.length < 5) {
      firstFiveVideo = firstFiveVideo.concat(
        this.props.movieList.slice(0, 5 - firstFiveVideo.length)
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
          <div className="sliderChild slider-content-container">
            <ul className="slider-content">
              {firstFiveVideo.map((movie, index) => (
                <li className="slider-item">
                  {/* passing movie object through Link */}
                  <Link
                    to={{
                      pathname: `/movie`,
                      state: {
                        movie: movie
                      }
                    }}
                  >
                    <img
                      className="poster"
                      src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                      alt=""
                      key={index}
                    />
                  </Link>

                  <div className="movieDetails">
                    <Link
                      to={{
                        pathname: `/movie`,
                        state: {
                          movie: movie
                        }
                      }}
                    >
                      <p className="movie-title">{movie.title}</p>
                    </Link>
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
      </>
    );
  }
}

export default Slider;
