import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BaseLayout extends Component {
  render() {
    let style = {
      footerStyle: {
        position: "fixed",
        bottom: 0,
        backgroundColor: "black",
        color: "#ff073a",
        textShadow: "0em 0em 0.5em #d3002b",
        width: "100%",
        textAlign: "center"
      },
      headerStyle: {
        textAlign: "center",
        textDecoration: "none",
        margin: "auto"
      },
      headerPositioning: {
        margin: "0rem 0rem 2rem 0rem",
        position: "fixed",
        left: "27.5%"
        // textAlign: "center"
      },
      navStyle: {
        textAlign: "center",
        textDecoration: "none",
        fontSize: 30,
        margin: "1rem 0rem 0rem 0rem"
      }
    };

    return (
      <div>
        <div className="parallaxOne">
          <div style={{ textAlign: "center" }}>
            <header style={style.headerPositioning}>
              <Link to="/" style={style.headerStyle}>
                <div style={style.headerStyle}>
                  <h1 className="headerText">Portfolio</h1>
                  <h3 className="headerSubText">aestethics edition</h3>
                </div>
              </Link>
              <div className="navText" style={style.navStyle}>
                <Link to="/home">Home</Link>
                <span> | </span>
                <Link to="/about">About</Link>
                <span> | </span>
                <Link to="/portfolio">Portfolio</Link>
              </div>
            </header>
          </div>

          {this.props.children}
        </div>
        <div className="textBlock" />

        <div className="parallaxTwo" />

        <footer style={style.footerStyle}>
          <h3>copyright 2017, Zachstuff ltd.</h3>
        </footer>
      </div>
    );
  }
}
