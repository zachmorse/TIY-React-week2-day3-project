import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BaseLayout extends Component {
  render() {
    let style = {
      footerStyle: {
        position: "fixed",
        bottom: 0
      },
      headerStyle: {
        textAlign: "center",
        textDecoration: "none"
      }
    };

    return (
      <div>
        <header>
          <Link to="/" style={style.headerStyle}>
            <div style={style.headerStyle}>
              <h1 className="headerText">Portfolio</h1>
              <h3 className="headerSubText">
                a e s t e t h i c s e d i t i o n
              </h3>
            </div>
          </Link>
          <div className="navText">
            <Link to="/home">Home</Link>
            <span> | </span>
            <Link to="/about">About</Link>
            <span> | </span>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </header>

        {this.props.children}

        <footer>
          <h3>copyright 2017, Zachstuff ltd.</h3>
        </footer>
      </div>
    );
  }
}
