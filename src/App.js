import React, { Component } from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// component imports:

import About from "./components/About";
import BaseLayout from "./components/BaseLayout";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
