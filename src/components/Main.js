import React, { Component } from 'react';
import CharacterList from './characters/CharacterList';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <Header
          searchHandler={this.props.searchHandler}
          searchValue={this.props.searchValue}
        />
        <main className="main-page">
          <CharacterList characterList={this.props.characterList} />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
