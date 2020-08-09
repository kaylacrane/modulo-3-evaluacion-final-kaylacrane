import React, { Component } from 'react';

class SearchByStatus extends Component {
  constructor(props) {
    super(props);
    this.isAliveHandlerChild = this.isAliveHandlerChild.bind(this);
  }
  isAliveHandlerChild(event) {
    this.props.isAliveHandler(event);
  }
  render() {
    console.log(this.props);
    return (
      <label htmlFor="isAlive" className="status-filter">
        <input
          type="checkbox"
          id="isAlive"
          checked={this.props.isAliveOnly}
          onChange={this.isAliveHandlerChild}
        />
        Alive only
      </label>
    );
  }
}

export default SearchByStatus;
