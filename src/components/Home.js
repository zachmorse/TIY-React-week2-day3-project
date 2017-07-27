import React, { Component } from "react";

export default class Home extends Component {
  componentDidMount() {
    this.scrollWin();
  }

  scrollWin = e => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "#f0db4f" }}>Welcome Home, friend.</h1>
        <p style={{ color: "white", textAlign: "left" }}>
          Check out my portfolio, and enjoy.
        </p>
      </div>
    );
  }
}
