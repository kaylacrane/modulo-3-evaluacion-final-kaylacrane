import React, { Component } from 'react';
import CharacterList from './characters/CharacterList';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="page">
        <Header
          searchHandler={this.props.searchHandler}
          searchValue={this.props.searchValue}
          resetHandler={this.props.resetHandler}
        />
        <main className="main">
          <CharacterList characterList={this.props.characterList} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
