import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import fetchQuotes from '../services/FetchQuotes';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
    };
  }

  componentDidMount() {
    fetchQuotes().then((data) => {
      this.setState({
        quote: data.data,
      });
    });
  }
  render() {
    console.log(this.state.quote);
    return (
      <main className="landing-main">
        <Link to="/main/">Let's Go</Link>
        <div>{this.state.quote}</div>
      </main>
    );
  }
}

export default Landing;
