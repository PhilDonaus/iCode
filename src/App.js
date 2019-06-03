import React, { Component } from 'react';
import Nav from './components/nav/nav';
import Code from './components/code/code';
import Editor from './components/editor/editor';

class App extends Component {
  render() {
    return (
    <div>
    	<Editor thecode={'console.log("Hi!");'}/>
    </div>
    );
  }
}

export default App;
