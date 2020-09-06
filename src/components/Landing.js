import React, { Component } from "react";
import { Link } from "react-router-dom";
import fetchData from "../services/FetchData";
import portalGif from "../images/portal.gif";
import defImg from "../images/rick-burp.gif";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.getImage = this.getImage.bind(this);
    this.state = {
      randomImage: defImg,
    };
  }
  getImage() {
    const randomNumber = Math.floor(Math.random() * 394) + 1;
    fetchData(randomNumber).then((data) => {
      this.setState({ randomImage: data });
    });
  }

  componentDidMount() {
    this.getImage();
  }
  render() {
    const { randomImage } = this.state;
    console.log(randomImage);
    return (
      <main className="landing-main">
        <div className="portal-quote-block">
          <img
            src={portalGif}
            alt="spinning green space portal"
            className="portal-gif"
          />
          <div className="random-image-container" onClick={this.getImage}>
            <img
              src={randomImage.image ? randomImage.image : randomImage}
              alt="random character"
              title={
                this.state.randomImage
                  ? this.state.randomImage.name
                  : "Rick and Morty character"
              }
            />
          </div>
        </div>
        <Link to="/main/" className="link-to-main">
          Let's Get Schwifty
        </Link>
      </main>
    );
  }
}

export default Landing;
