import React, { Component } from 'react';

class SearchOrigin extends Component {
  constructor(props) {
    super(props);
    this.filterHandlerChild = this.filterHandlerChild.bind(this);
  }
  filterHandlerChild(event) {
    this.props.filterHandler({
      key: 'isOrigin',
      value: event.currentTarget.checked,
    });
  }
  render() {
    return (
      <label htmlFor="isOrigin">
        <input
          type="checkbox"
          id="isOrigin"
          checked={this.props.isOrigin}
          onChange={this.filterHandlerChild}
        />
        Origin same as Location
      </label>
    );
  }
}

export default SearchOrigin;
