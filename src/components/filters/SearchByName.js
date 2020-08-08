import React, { Component } from 'react';

class SearchByName extends Component {
  constructor(props) {
    super(props);
    this.nameSearchHandlerChild = this.nameSearchHandlerChild.bind(this);
    this.resetHandlerChild = this.resetHandlerChild.bind(this);
    this.enterHandler = this.enterHandler.bind(this);
  }
  nameSearchHandlerChild(event) {
    this.props.nameSearchHandler(event);
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
    return (
      <React.Fragment>
        <h3 className="form-title">Search characters by name:</h3>
        <input
          type="text"
          onChange={this.nameSearchHandlerChild}
          value={this.props.searchValue}
          placeholder="Beth Smith"
        ></input>
        <button
          type="reset"
          className="reset-button"
          onClick={this.resetHandlerChild}
        >
          Clear
        </button>
      </React.Fragment>
    );
  }
}

export default SearchByName;
