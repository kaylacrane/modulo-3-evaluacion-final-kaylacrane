import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetchQuotes from '../services/FetchQuotes';
import portalGif from '../images/portal.gif';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.clickQuote = this.clickQuote.bind(this);
    this.state = {
      quote: '',
    };
  }

  componentDidMount() {
    fetchQuotes().then((data) => {
      this.setState({
        quote: data.data,
      });
    });
  }
  clickQuote() {
    fetchQuotes().then((data) => {
      this.setState({
        quote: data.data,
      });
    });
  }
  render() {
    return (
      <main className="landing-main">
        <div className="portal-quote-block">
          <img
            src={portalGif}
            alt="spinning green space portal"
            className="portal-gif"
          />
          <div className="random-quote" onClick={this.clickQuote}>
            {this.state.quote}
          </div>
        </div>
        <Link to="/main/" className="link-to-main">
          Let's Get Schwifty{' '}
        </Link>
      </main>
    );
  }
}

export default Landing;
