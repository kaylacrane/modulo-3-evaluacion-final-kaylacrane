import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import rickDanceGif from '../../images/rick-booty-dance.gif';

class CharacterDetail extends Component {
  render() {
    if (this.props.character) {
      const {
        id,
        name,
        status,
        species,
        origin,
        type,
        location,
        image,
        episode,
      } = this.props.character;
      return (
        <div className="details-page">
          <div className="character-details">
            <Link className="link-back" to="/main/">
              Back
            </Link>
            <img src={image} alt={name} className="character-image" />
            <div className="character-details-stats">
              <h2>{name}</h2>
              <div>
                <span>
                  <span className="details-title">Species:</span>
                  {` ${species} ${type}`}
                </span>
              </div>
              <div>
                <span>
                  <span className="details-title">Status:</span>
                  {` ${status === 'Alive' ? '🙂' : '💀'}`}
                </span>
              </div>
              <div>
                <span>
                  <span className="details-title">Place of origin:</span>
                  {` ${origin.name}`}
                </span>
              </div>
              <div>
                <span>
                  <span className="details-title">Episodes:</span>
                  {` ${episode.length}`}
                </span>
              </div>
              <div>
                <span>
                  <span className="details-title">Location:</span>
                  {` ${location.name}`}
                </span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="details-page">
          <span>Move along</span>
          <img className="gif" src={rickDanceGif} alt="Rick dance gif" />
        </div>
      );
    }
  }
}

export default CharacterDetail;
