import React, { Component } from 'react';
import SearchByName from './filters/SearchByName';
import rickMortyLogo from '../images/logo-rick-and-morty.png';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <h1 className="header-title">
            <Link to="/">
              <img
                src={rickMortyLogo}
                alt="Rick and Morty logo"
                className="header-logo"
              />
            </Link>
          </h1>
          <SearchByName
            searchHandler={this.props.searchHandler}
            searchValue={this.props.searchValue}
            resetHandler={this.props.resetHandler}
          />
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
