import React, { Component } from 'react';

class SearchByName extends Component {
  constructor(props) {
    super(props);
    this.filterHandlerChild = this.filterHandlerChild.bind(this);
    this.enterHandler = this.enterHandler.bind(this);
  }
  filterHandlerChild(event) {
    this.props.filterHandler({
      key: 'searchText',
      value: event.currentTarget.value,
    });
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
        onChange={this.filterHandlerChild}
        onKeyDown={this.enterHandler}
        value={this.props.searchValue}
        placeholder="Beth Smith"
      ></input>
    );
  }
}

export default SearchByName;
