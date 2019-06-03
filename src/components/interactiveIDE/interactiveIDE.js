import React, {Component } from 'react';
import { render } from 'react-dom';


class interactiveIDE extends Component {
  
  constructor(props) {
    super(props);
    this.state = {mycode:`function onLoad(editor) {
			console.log("i've loaded");
			}`};
  }
  
  
}