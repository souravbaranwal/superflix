import React, { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   movieId: null,
      videoKey: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=aebe3910ab68767bd5047cf76f34c313&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(({ results }) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${results[0].id}/videos?api_key=aebe3910ab68767bd5047cf76f34c313&language=en-US
      `
        )
          .then(res => res.json())
          .then(data =>
            this.setState({
              videoKey: data.results[0].key,
              isLoading: true
            })
          )
      );
  }
  render() {
    if (this.state.videoKey) {
      return (
        <>
          <div className="hero">
            {/* Hi I am Header and I am working properly
            {this.state.videoKey} */}
            <div className="iframe-container">
              <iframe
                id="bg"
                src={`https://www.youtube.com/embed/${this.state.videoKey}?controls=0&amp;autoplay=0&amp`}
                frameborder="0"
                autoplay="1"
              ></iframe>
            </div>
            <div className="iframe-content">
              <h2>This will be placed over the video</h2>
            </div>
          </div>
        </>
      );
    } else {
      return <>loading</>;
    }
  }
}

export default Hero;
