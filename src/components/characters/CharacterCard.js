import React, { Component } from 'react';
import Emoji from './Emoji';

class CharacterCard extends Component {
  render() {
    const { name, image, species } = this.props;
    return (
      <div className="character-card">
        <span className="character-species">
          <Emoji species={species} />
        </span>
        <img src={image} alt={name} className="card-image" />

        <h2 className="character-name">{name}</h2>
      </div>
    );
  }
}

export default CharacterCard;
