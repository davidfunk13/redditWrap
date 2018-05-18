import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing/Landing.js'
import Home from './pages/Home/Home.js'
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav.js';
import Search from './pages/Search/Search.js';
import Saved from './pages/Saved/Saved.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/saved' component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
