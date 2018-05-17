import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing/Landing.js'
import Home from './pages/Home/Home.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
