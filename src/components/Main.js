import React, { Component } from 'react';
import CharacterList from './characters/CharacterList';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.getNextPageChild = this.getNextPageChild.bind(this);
  }
  getNextPageChild() {
    this.props.getNextPage();
  }
  render() {
    return (
      <div className="page">
        <Header
          searchValue={this.props.searchValue}
          resetHandler={this.props.resetHandler}
          speciesList={this.props.speciesList}
          speciesFilter={this.props.speciesFilter}
          isAliveOnly={this.props.isAliveOnly}
          filterHandler={this.props.filterHandler}
          isOrigin={this.props.isOrigin}
        />
        <main className="main">
          <CharacterList
            characterList={this.props.characterList}
            searchValue={this.props.searchValue}
          />
          <button
            onClick={this.getNextPageChild}
            className={`load-more ${this.props.nextPageButton}`}
          >
            Load more results
          </button>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
