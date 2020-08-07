import React, { Component } from 'react';

class CharacterCard extends Component {
  render() {
    const { name, image, species } = this.props;

    return (
      <div className="character-card">
        <span className="character-species">
          {species === 'Human' ? '🧍' : '🛸'}
        </span>
        <img src={image} alt={name} className="card-image" />

        <h2 className="character-name">{name}</h2>
      </div>
    );
  }
}

export default CharacterCard;
