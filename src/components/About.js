import React, { Component } from "react";

export default class About extends Component {
  componentDidMount() {
    this.scrollWin();
  }

  scrollWin = e => {
    window.scrollTo(0, 0);
  };

  render() {
    let style = {
      textProperties: {
        color: "#f0db4f",
        fontSize: 30
      },
      textHeader: {
        fontStyle: "italic"
      },
      justifyCenter: {
        textAlign: "center",
        color: "#fff"
      }
    };
    return (
      <div style={style.textProperties}>
        <h3 style={style.textHeader}>The Multi-faceted Man.</h3>
        <p style={{ fontSize: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          saepe harum provident, itaque alias, commodi incidunt, veniam porro
          maxime eaque architecto est consectetur ad id. Expedita, est, nihil.
          Inventore, recusandae.
        </p>
        <p style={style.justifyCenter}>
          Nihil harum reiciendis in, facilis ratione accusantium maiores,
          mollitia cum sint velit voluptate aliquid fuga vitae eos earum
          voluptatibus adipisci vel sapiente.
        </p>
      </div>
    );
  }
}
