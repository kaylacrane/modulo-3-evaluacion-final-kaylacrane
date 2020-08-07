import React, { Component } from 'react';

class SearchByName extends Component {
  constructor(props) {
    super(props);
    this.searchHandlerChild = this.searchHandlerChild.bind(this);
  }
  searchHandlerChild(event) {
    this.props.searchHandler(event);
  }
  render() {
    console.log(this.props);

    return (
      <form>
        <h3>Search characters by name:</h3>
        <input
          type="text"
          onChange={this.searchHandlerChild}
          value={this.props.searchValue}
        ></input>
      </form>
    );
  }
}

export default SearchByName;
