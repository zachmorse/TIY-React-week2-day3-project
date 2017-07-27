import React, { Component } from "react";

export default class Portfolio extends Component {
  componentDidMount() {
    this.scrollWin();
  }

  scrollWin = e => {
    window.scrollTo(0, 0);
  };

  render() {
    let style = {
      headerStyle: {
        color: "white",
        fontSize: 25,
        fontStyle: "italic"
      },
      subHeader: {
        color: "#f0db4f",
        textAlign: "center"
      },
      imageBox: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      },
      imageFormatter: {
        maxHeight: 400,
        maxWidth: 400,
        border: "1px solid transparent",
        borderRadius: 5,
        margin: 15
      }
    };
    return (
      <div>
        <h1 style={style.headerStyle}>
          Aestethic requires cultivation. Inspiration. Dedication.
        </h1>
        <h3 style={style.subHeader}>
          I've accumulated a few inspiring images here:
        </h3>
        <div style={style.imageBox}>
          <img
            src="https://image2.redbull.com/rbx02017/0001/2/1760/507/gettyimages-185851440_0.jpg"
            alt="weird guy"
            style={style.imageFormatter}
          />
          <img
            src="https://scontent.cdninstagram.com/t51.2885-15/e35/13118256_794604877337150_344389817_n.jpg?ig_cache_key=MTIzOTI3NTQzMzA5OTAxNzg4MA%3D%3D.2"
            alt="MTV"
            style={style.imageFormatter}
          />
          <img
            src="https://scontent-amt2-1.cdninstagram.com/t51.2885-15/e35/c236.0.607.607/14733630_1210598109011315_7148322569920184320_n.jpg"
            alt="Testarossa"
            style={style.imageFormatter}
          />
        </div>
      </div>
    );
  }
}
