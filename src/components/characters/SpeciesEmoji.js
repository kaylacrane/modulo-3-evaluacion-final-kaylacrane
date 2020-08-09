import React, { Component } from 'react';

class SpeciesEmoji extends Component {
  render() {
    /*instead of a lot of else if statements, create an object and access using object[key]*/
    const emojis = {
      Human: '🧑🏾‍🤝‍🧑🏻',
      Alien: '👽',
      Animal: '🐖',
      Humanoid: '🧝',
      Parasite: '🦟',
      Robot: '🤖',
      Poopybutthole: '💩',
      Vampire: '🧛',
      Disease: '🦠',
      Unknown: '❓',
      Mytholog: '🦄',
    };
    const { species } = this.props;
    return (
      <span
        className="species-emoji"
        role="img"
        aria-label={`emoji ${species}`}
      >
        {emojis[species]}
      </span>
    );
  }
}

export default SpeciesEmoji;
