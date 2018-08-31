import React, { Component } from 'react';
import Nav from './components/nav/nav';
import Code from './components/code/code';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
    <Nav />
    <Code />
    </div>
    )
  }
}

export default App;
