import React, { Component } from 'react';

class CharacterDetail extends Component {
  render() {
    console.log(this.props);
    const { id } = this.props.match.params;
    return <div>{id}</div>;
  }
}

export default CharacterDetail;
