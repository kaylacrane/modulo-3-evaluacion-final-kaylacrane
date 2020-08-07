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
      <div className="form-container">
        <form className="form">
          <h3 className="form-title">Search characters by name:</h3>
          <input
            type="text"
            onChange={this.searchHandlerChild}
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
        </form>
      </div>
    );
  }
}

export default SearchByName;
