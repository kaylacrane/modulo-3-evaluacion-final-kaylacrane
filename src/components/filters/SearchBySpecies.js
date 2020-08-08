import React, { Component } from 'react';

class SearchBySpecies extends Component {
  constructor(props) {
    super(props);
    this.speciesSearchHandlerChild = this.speciesSearchHandlerChild.bind(this);
  }
  speciesSearchHandlerChild(event) {
    console.log(event.target.value);
    this.props.speciesSearchHandler(event);
  }
  render() {
    let speciesDropDowns;
    speciesDropDowns = this.props.speciesList.map((species, index) => {
      return (
        <option key={index} value={species}>
          {species}
        </option>
      );
    });

    return (
      <select
        name="species"
        id="species"
        onChange={this.speciesSearchHandlerChild}
        className="species-filter"
      >
        <option value="All" defaultValue>
          All
        </option>
        {speciesDropDowns}
      </select>
    );
  }
}

export default SearchBySpecies;
