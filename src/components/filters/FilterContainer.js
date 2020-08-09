import React, { Component } from 'react';
import SearchByName from './SearchByName';
import SearchBySpecies from './SearchBySpecies';
import SearchByStatus from './SearchByStatus';

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
        <h3 className="form-title">Search characters:</h3>
        <form className="form">
          <SearchByName
            filterHandler={this.props.filterHandler}
            searchValue={this.props.searchValue}
          />
          <div className="filter-block">
            <SearchBySpecies
              filterHandler={this.props.filterHandler}
              speciesList={this.props.speciesList}
              speciesFilter={this.props.speciesFilter}
            />
            <SearchByStatus
              isAliveOnly={this.props.isAliveOnly}
              filterHandler={this.props.filterHandler}
            />
          </div>
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
