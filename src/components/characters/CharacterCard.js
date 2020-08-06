import React, { Component } from 'react';

class CharacterCard extends Component {
  render() {
    const { name, image, species } = this.props;
    return (
      <div className="character-card">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <span>{species}</span>
      </div>
    );
  }
}

export default CharacterCard;
