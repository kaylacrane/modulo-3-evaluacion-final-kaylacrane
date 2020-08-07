import React, { Component } from 'react';

class SearchByName extends Component {
  constructor(props) {
    super(props);
    this.searchHandlerChild = this.searchHandlerChild.bind(this);
    this.resetHandlerChild = this.resetHandlerChild.bind(this);
    this.enterHandler = this.enterHandler.bind(this);
  }
  searchHandlerChild(event) {
    this.props.searchHandler(event);
  }
  resetHandlerChild() {
    this.props.resetHandler();
  }
  enterHandler(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
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
        <button type="reset" onClick={this.resetHandlerChild}>
          Clear
        </button>
      </form>
    );
  }
}

export default SearchByName;
