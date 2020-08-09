import React, { Component } from 'react';

class SearchByStatus extends Component {
  constructor(props) {
    super(props);
    this.filterHandlerChild = this.filterHandlerChild.bind(this);
  }
  filterHandlerChild(event) {
    this.props.filterHandler({
      key: 'isAliveOnly',
      value: event.currentTarget.checked,
    });
  }
  render() {
    console.log(this.props);
    return (
      <label htmlFor="isAlive" className="status-filter">
        <input
          type="checkbox"
          id="isAlive"
          checked={this.props.isAliveOnly}
          onChange={this.filterHandlerChild}
        />
        Alive only
      </label>
    );
  }
}

export default SearchByStatus;
