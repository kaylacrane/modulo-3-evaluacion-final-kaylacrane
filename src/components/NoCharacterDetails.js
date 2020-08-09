import React, { Component } from 'react';
import rickBurpGif from '../images/rick-burp.gif';

class NoCharacterDetails extends Component {
  render() {
    return (
      <div className="no-results">
        <img src={rickBurpGif} alt="Rick gif" />
        <h2 className="no-results-text">I got nothin', chump</h2>
      </div>
    );
  }
}

export default NoCharacterDetails;
