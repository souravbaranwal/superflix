import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./stylesheet/style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

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

              <Route render={() => <p>Not found</p>} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
