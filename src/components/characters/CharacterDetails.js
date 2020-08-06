import React, { Component } from 'react';

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
          <span>{origin}</span>
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
