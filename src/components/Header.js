import React, { Component } from 'react';
import SearchByName from './filters/SearchByName';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Header</h1> <SearchByName />
      </header>
    );
  }
}

export default Header;
