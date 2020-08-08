import React, { Component } from 'react';
import SearchByName from './SearchByName';
import SearchBySpecies from './SearchBySpecies';

class FilterContainer extends Component {
  render() {
    return (
      <div className="form-container">
        <form className="form">
          <SearchByName
            nameSearchHandler={this.props.nameSearchHandler}
            resetHandler={this.props.resetHandler}
          />
          <SearchBySpecies
            speciesSearchHandler={this.props.speciesSearchHandler}
            speciesList={this.props.speciesList}
          />
        </form>
      </div>
    );
  }
}

export default FilterContainer;
