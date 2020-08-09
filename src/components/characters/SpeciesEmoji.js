import React, { Component } from 'react';

class SpeciesEmoji extends Component {
  render() {
    const { species } = this.props;
    let emoji = '';
    if (species === 'Human') {
      emoji = '🧑🏾‍🤝‍🧑🏻';
    } else if (species === 'Alien') {
      emoji = '👽';
    } else if (species === 'Animal') {
      emoji = '🐖';
    } else if (species === 'Humanoid') {
      emoji = '🧝';
    } else if (species === 'Humanoid') {
      emoji = '🧝';
    } else if (species === 'Robot') {
      emoji = '🤖';
    } else if (species === 'Poopybutthole') {
      emoji = '💩';
    } else if (species === 'Vampire') {
      emoji = '🧛';
    } else if (species === 'Disease') {
      emoji = '🦠';
    } else if (species === 'Unknown') {
      emoji = '❓';
    } else if (species === 'Mytholog') {
      emoji = '🦄';
    } else {
      return (emoji = species);
    }
    return (
      <span
        className="species-emoji"
        role="img"
        aria-label={`emoji ${species}`}
      >
        {emoji}
      </span>
    );
  }
}

export default SpeciesEmoji;
