import React, { Component } from 'react';

class SearchByName extends Component {
  constructor(props) {
    super(props);
    this.nameSearchHandlerChild = this.nameSearchHandlerChild.bind(this);
    this.enterHandler = this.enterHandler.bind(this);
  }
  nameSearchHandlerChild(event) {
    this.props.nameSearchHandler(event);
  }
  enterHandler(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }
  render() {
    return (
      <input
        type="text"
        onChange={this.nameSearchHandlerChild}
        onKeyDown={this.enterHandler}
        value={this.props.searchValue}
        placeholder="Beth Smith"
      ></input>
    );
  }
}

export default SearchByName;
