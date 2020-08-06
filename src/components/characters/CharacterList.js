import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
  render() {
    const charactersHtml = this.props.characterList.map((character) => {
      const { name, id, species, image } = character;
      return (
        <li key={id}>
          <Link to={`/character/${id}`}>
            <CharacterCard
              name={name}
              id={id}
              species={species}
              image={image}
            />
          </Link>
        </li>
      );
    });
    return <ul>{charactersHtml}</ul>;
  }
}

export default CharacterList;
