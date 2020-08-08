import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import fetchData from '../services/FetchData';
import Main from './Main';
import CharacterDetails from './characters/CharacterDetails';
import Landing from '../components/Landing';
import fetchNextPage from '../services/FetchNextPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderFilteredCharacters = this.renderFilteredCharacters.bind(this);
    this.renderFilteredCharacters = this.renderFilteredCharacters.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.nameSearchHandler = this.nameSearchHandler.bind(this);
    this.speciesSearchHandler = this.speciesSearchHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
    this.state = {
      characterList: [],
      searchText: '',
      page: 1,
      speciesFilter: 'All',
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

  nameSearchHandler(event) {
    this.setState({ searchText: event.currentTarget.value });
  }
  speciesSearchHandler(event) {
    console.log('hi');
    console.log(event.currentTarget.value);
    this.setState({
      speciesFilter: event.currentTarget.value,
    });
  }
  resetHandler() {
    this.setState({ searchText: '' });
  }
  renderMain() {
    let speciesList = this.state.characterList.map((character) => {
      return character.species;
    });
    speciesList = Array.from(new Set(speciesList));
    return (
      <Main
        characterList={this.renderFilteredCharacters()}
        nameSearchHandler={this.nameSearchHandler}
        searchValue={this.state.searchText}
        resetHandler={this.resetHandler}
        getNextPage={this.getNextPage}
        speciesList={speciesList}
        speciesSearchHandler={this.speciesSearchHandler}
      />
    );
  }
  // .sort((a, b) =>
  //     a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  //   )
  renderFilteredCharacters() {
    let characterList = this.state.characterList;
    console.log(this.state.speciesFilter);
    if (this.state.speciesFilter !== 'All')
      characterList = characterList.filter(
        (character) => character.species === this.state.speciesFilter
      );
    console.log(characterList);
    if (this.state.searchText !== '') {
      characterList = characterList.filter((character) =>
        character.name
          .toLowerCase()
          .includes(this.state.searchText.toLowerCase())
      );
      return characterList;
    }

    return characterList;
  }
  renderCharacterDetails(event) {
    const characterID = event.match.params.id;
    const stateCharacterList = this.state.characterList;
    const characterInfo = stateCharacterList.find(
      (character) => character.id === parseInt(characterID)
    );
    return <CharacterDetails character={characterInfo} />;
  }
  getNextPage() {
    const pageNumber = this.state.page + 1;
    fetchNextPage(pageNumber).then((data) => {
      console.log(data);
      this.setState({
        characterList: [...this.state.characterList, ...data.results],
        page: pageNumber,
      });
    });
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
