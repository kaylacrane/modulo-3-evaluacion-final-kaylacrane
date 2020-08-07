import React, { Component } from 'react';
import adalabLogo from '../images/logo-adalab.png';

class Footer extends Component {
  render() {
    const githubLink = 'https://github.com/kaylacrane';
    return (
      <footer>
        <div className="copy-block">
          <small>
            <a href={githubLink} title="Kayla's GitHub page">
              kayla
            </a>{' '}
            made this
          </small>
        </div>
        <div className="logo-block">
          <img src={adalabLogo} alt="Adalab logo" />
        </div>
      </footer>
    );
  }
}

export default Footer;
