import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import NoResults from '../NoResults';
import Proptypes from 'prop-types';

class CharacterList extends Component {
  render() {
    const charactersHtml = this.props.characterList.map((character) => {
      character.PropTypes = {
        name: Proptypes.string,
        species: Proptypes.string,
        image: Proptypes.string,
        id: Proptypes.number,
      };
      const { name, id, species, image } = character;
      return (
        <li key={id}>
          <Link to={`/character/${id}`}>
            <CharacterCard
              name={name}
              id={id}
              species={species}
              image={image}
              searchValue={this.props.searchValue}
            />
          </Link>
        </li>
      );
    });
    return (
      <div className="character-list">
        {charactersHtml.length ? <ul>{charactersHtml}</ul> : <NoResults />}
      </div>
    );
  }
}

export default CharacterList;
