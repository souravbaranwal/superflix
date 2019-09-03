import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./stylesheet/style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Search from "./components/Search";
import Movie from "./components/Movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/movie" component={Movie} />
              <Route
                render={() => (
                  <p className="text-center">
                    Oh Oo !! <br /> I Think You Are Lost
                  </p>
                )}
              />
            </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
