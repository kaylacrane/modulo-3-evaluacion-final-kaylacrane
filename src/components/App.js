import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <main>
        <Link to="/">Home</Link>
        <Switch>
          {/* <Route exact path="/" component={Home}></Route>
          <Route exact path="/">
            <CharacterList
              characterList={
                stateCharacterList.length
                  ? stateCharacterList
                  : characterJson.results
              }
            />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetails} /> */}
        </Switch>
      </main>
    );
  }
}

export default App;
