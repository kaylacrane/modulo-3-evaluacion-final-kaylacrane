import React, { Component } from 'react';
import rickMortyLogo from '../images/logo-rick-and-morty.png';
import { Link } from 'react-router-dom';
import FilterContainer from './filters/FilterContainer';

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
          <FilterContainer
            nameSearchHandler={this.props.nameSearchHandler}
            searchValue={this.props.searchValue}
            resetHandler={this.props.resetHandler}
            speciesList={this.props.speciesList}
            speciesSearchHandler={this.props.speciesSearchHandler}
          />
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
