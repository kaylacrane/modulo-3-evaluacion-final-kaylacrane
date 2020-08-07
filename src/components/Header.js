import React, { Component } from 'react';
import SearchByName from './filters/SearchByName';
import rickMortyLogo from '../images/logo-rick-and-morty.png';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <h1 className="header-title">
            <img
              src={rickMortyLogo}
              alt="Rick and Morty logo"
              className="header-logo"
            />
          </h1>
          <SearchByName
            searchHandler={this.props.searchHandler}
            searchValue={this.props.searchValue}
            resetHandler={this.props.resetHandler}
          />
        </header>
        <div className="header-space"></div>
      </React.Fragment>
    );
  }
}

export default Header;
