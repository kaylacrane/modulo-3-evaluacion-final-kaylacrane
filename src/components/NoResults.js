import React, { Component } from 'react';
import rickFingerGif from '../images/rick-finger.gif';
import rickBurpGif from '../images/rick-burp.gif';
class NoResults extends Component {
  render() {
    return (
      <div className="no-results">
        <h2 className="no-results-title">I got nothin', chump</h2>
        <img src={rickFingerGif} alt="Rick gif" />
      </div>
    );
  }
}

export default NoResults;
