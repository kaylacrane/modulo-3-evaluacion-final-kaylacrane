import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
  render() {
    console.log(this.props);
    const charactersHtml = this.props.characterList.map((character) => {
      const { name, id } = character;
      return (
        <li>
          <Link to={`/character/${id}`}>
            <CharacterCard name={name} id={id} />
          </Link>
        </li>
      );
    });
    return <ul>{charactersHtml}</ul>;
  }
}

export default CharacterList;
