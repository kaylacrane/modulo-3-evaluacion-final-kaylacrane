import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import fetchData from "../services/FetchData";
import Main from "./Main";
import CharacterDetails from "./characters/CharacterDetails";
import Landing from "../components/Landing";

class App extends Component {
  constructor(props) {
    super(props);
    this.renderFilteredCharacters = this.renderFilteredCharacters.bind(this);
    this.renderFilteredCharacters = this.renderFilteredCharacters.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
    this.nextPageButton = this.nextPageButton.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
    this.state = {
      characterList: [],
      searchText: "",
      page: 1,
      speciesFilter: "All",
      maxPages: 1,
      isAliveOnly: false,
    };
  }
  // DATA FETCHERS
  componentDidMount() {
    const pageNumber = this.state.page;
    fetchData(`?page=${pageNumber}`).then((data) => {
      this.setState({
        characterList: data.results,
        maxPages: data.info.pages,
      });
    });
  }
  getNextPage() {
    const { maxPages, page } = this.state;
    const nextPage = page + 1;
    if (nextPage <= maxPages) {
      fetchData(page + 1).then((data) => {
        this.setState({
          characterList: [...this.state.characterList, ...data.results],
          page: nextPage,
        });
      });
    }
  }
  // FILTERS AND HANDLERS
  filterHandler(data) {
    this.setState({ [data.key]: data.value });
  }
  resetHandler() {
    this.setState({ searchText: "", speciesFilter: "All", isAliveOnly: false });
  }
  nextPageButton() {
    const { maxPages, page } = this.state;
    const nextPage = page + 1;
    if (nextPage > maxPages) {
      return "disabled";
    } else {
      return "";
    }
  }
  // RENDER
  renderMain() {
    let speciesList = this.state.characterList.map((character) => {
      return character.species;
    });
    /* to get list of species without duplicates */
    speciesList = [...new Set(speciesList)];
    return (
      <Main
        nextPageButton={this.nextPageButton()}
        characterList={this.renderFilteredCharacters()}
        searchValue={this.state.searchText}
        resetHandler={this.resetHandler}
        getNextPage={this.getNextPage}
        speciesList={speciesList}
        filterHandler={this.filterHandler}
        speciesFilter={this.state.speciesFilter}
        isAliveOnly={this.state.isAliveOnly}
      />
    );
  }
  renderFilteredCharacters() {
    let characterList = this.state.characterList;
    return characterList
      .filter((character) => {
        return character.name
          .toLowerCase()
          .includes(this.state.searchText.toLowerCase());
      })
      .filter((character) => {
        return this.state.speciesFilter === "All"
          ? true
          : character.species === this.state.speciesFilter;
      })
      .filter((character) => {
        return this.state.isAliveOnly ? character.status === "Alive" : true;
      })
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  }
  renderCharacterDetails(event) {
    const characterID = event.match.params.id;
    const stateCharacterList = this.state.characterList;
    const characterInfo = stateCharacterList.find(
      (character) => character.id === parseInt(characterID)
    );
    return (
      <CharacterDetails
        character={characterInfo}
        searchValue={this.state.searchText}
      />
    );
  }

  render() {
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
