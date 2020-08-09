import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rickDanceGif from '../../images/rick-booty-dance.gif';
import Proptypes from 'prop-types';

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
      this.props.character.PropTypes = {
        id: Proptypes.number,
        name: Proptypes.string,
        status: Proptypes.string,
        species: Proptypes.string,
        origin: Proptypes.object,
        type: Proptypes.string,
        location: Proptypes.object,
        image: Proptypes.string,
        episode: Proptypes.number,
      };
      return (
        <div className="details-page">
          <div className="character-details">
            <div className="links-block">
              <Link
                className="fas fa-arrow-circle-left arrows"
                to={`/character/${id - 1}`}
              ></Link>
              <Link className="link-back" to="/main/">
                Back
              </Link>
              <Link
                className="fas fa-arrow-circle-right arrows"
                to={`/character/${id + 1}`}
              ></Link>
            </div>

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
        <div className="details-page nothing">
          <span className="nothing-text">
            Nothin' here but some sweet dance moves
          </span>
          <img className="dance-gif" src={rickDanceGif} alt="Rick dance gif" />
          <Link className="back-button" to="/main/">
            Home
          </Link>
        </div>
      );
    }
  }
}

export default CharacterDetail;
