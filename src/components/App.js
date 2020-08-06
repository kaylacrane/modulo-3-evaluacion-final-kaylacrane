import React, { Component } from 'react';
import '../stylesheets/App.scss';
import { Link, Route, Switch } from 'react-router-dom';
import fetchData from '../services/FetchData';
import CharacterList from './characters/CharacterList';
import Header from './Header';
import CharacterDetails from './characters/CharacterDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderFilteredCharacters = this.renderFilteredCharacters.bind(this);

    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
    this.state = {
      characterList: [],
    };
  }
  componentDidMount() {
    fetchData().then((data) => {
      this.setState({
        characterList: data.results,
        pagesInfo: data.info,
      });
    });
  }
  renderFilteredCharacters() {
    const characterList = this.state.characterList;
    return characterList;
  }
  renderCharacterDetails(event) {
    console.log(this.state);
    const characterID = event.match.params.id;
    const stateCharacterList = this.state.characterList;
    const characterInfo = stateCharacterList.find(
      (character) => character.id === parseInt(characterID)
    );
    return <CharacterDetails character={characterInfo} />;
  }
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Header></Header>
        <main>
          <Switch>
            <Route exact path="/">
              <CharacterList characterList={this.renderFilteredCharacters()} />
            </Route>
            <Route path="/character/:id" render={this.renderCharacterDetails} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
