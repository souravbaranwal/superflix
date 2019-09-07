import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <footer>
          <p>
            SuperFlix, Made with <i class="fas fa-heart"></i>by Sourav
          </p>
        </footer>
      </>
    );
  }
}

export default Footer;
