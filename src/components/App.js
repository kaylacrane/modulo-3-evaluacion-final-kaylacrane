import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import fetchData from '../services/FetchData';
import Main from './Main';
import CharacterDetails from './characters/CharacterDetails';
import Landing from '../components/Landing';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderFilteredCharacters = this.renderFilteredCharacters.bind(this);
    this.renderFilteredCharacters = this.renderFilteredCharacters.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.state = {
      characterList: [],
      searchText: '',
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
  searchHandler(event) {
    console.log(event.currentTarget.value);
    this.setState({ searchText: event.currentTarget.value });
  }
  resetHandler() {
    this.setState({ searchText: '' });
  }
  renderMain() {
    return (
      <Main
        characterList={this.renderFilteredCharacters()}
        searchHandler={this.searchHandler}
        searchValue={this.state.searchText}
        resetHandler={this.resetHandler}
      />
    );
  }
  renderFilteredCharacters() {
    let characterList = this.state.characterList;
    if (this.state.searchText !== '') {
      characterList = characterList.filter((character) =>
        character.name
          .toLowerCase()
          .includes(this.state.searchText.toLowerCase())
      );
      return characterList;
    }
    console.log(characterList);
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
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/main/" render={this.renderMain} />
          <Route path="/character/:id" render={this.renderCharacterDetails} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
