import React, { Component } from 'react';
import adalabLogo from '../images/logo-adalab.png';

class Footer extends Component {
  render() {
    const githubLink = 'https://github.com/kaylacrane';
    return (
      <footer className="footer">
        <div className="copy-block">
          <small>
            <span role="img">🤓</span>
            <a href={githubLink} title="Kayla's GitHub page">
              kayla
            </a>{' '}
            made this
          </small>
        </div>
        <div className="logo-block">
          <a href="https://adalab.es/" title="Visit Adalab.es">
            <img src={adalabLogo} alt="Adalab logo" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
