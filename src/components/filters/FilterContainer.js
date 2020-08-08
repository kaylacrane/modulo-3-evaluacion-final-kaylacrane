import React, { Component } from 'react';
import SearchByName from './SearchByName';
import SearchBySpecies from './SearchBySpecies';

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.resetHandlerChild = this.resetHandlerChild.bind(this);
  }
  resetHandlerChild() {
    this.props.resetHandler();
  }
  render() {
    return (
      <div className="form-container">
        <form className="form">
          <h3 className="form-title">Search characters:</h3>
          <SearchByName nameSearchHandler={this.props.nameSearchHandler} />
          <SearchBySpecies
            speciesSearchHandler={this.props.speciesSearchHandler}
            speciesList={this.props.speciesList}
          />
          <button
            type="reset"
            className="reset-button"
            onClick={this.resetHandlerChild}
          >
            Clear
          </button>
        </form>
      </div>
    );
  }
}

export default FilterContainer;
