import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Link to="/main/">Let's Go</Link>
      </div>
    );
  }
}

export default Landing;
