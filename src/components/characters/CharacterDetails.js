import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class CharacterDetail extends Component {
  render() {
    const {
      id,
      name,
      status,
      gender,
      species,
      origin,
      type,
      location,
      image,
      episode,
    } = this.props.character;
    return (
      <div className="character-details">
        <Link to="/main/">Back</Link>
        <img src={image} alt={name} className="character-image" />
        <h2>{name}</h2>
        <div>
          <span>Species:</span>
          <span>{species}</span>
        </div>
        <div>
          <span>Status:</span>
          <span>{status}</span>
        </div>
        <div>
          <span>Origin:</span>
          <span>{origin.name}</span>
        </div>
        <div>
          <span>Episodes:</span>
          <span>{episode.length}</span>
        </div>
      </div>
    );
  }
}

export default CharacterDetail;
