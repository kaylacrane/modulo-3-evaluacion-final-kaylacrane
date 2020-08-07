import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import NoResults from '../NoResults';

class CharacterList extends Component {
  render() {
    console.log(this.props);
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
    return (
      <div className="character-list">
        {charactersHtml.length ? (
          <ul>{charactersHtml.length ? charactersHtml : <NoResults />}</ul>
        ) : (
          <NoResults />
        )}
      </div>
    );
  }
}

export default CharacterList;
