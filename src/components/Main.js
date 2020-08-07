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
      <div>
        <Header />
        <CharacterList characterList={this.props.characterList} />
        <Footer />
      </div>
    );
  }
}

export default Main;
