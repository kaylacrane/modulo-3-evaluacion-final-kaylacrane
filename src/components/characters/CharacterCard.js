import React, { Component } from 'react';

class CharacterCard extends Component {
  render() {
    console.log(this.props);
    const { name } = this.props;
    return <div>{name}</div>;
  }
}

export default CharacterCard;
