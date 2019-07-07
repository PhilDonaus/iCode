import React, { Component } from 'react';
import { render } from 'react-dom';



export default class TextManager extends Component {
  constructor(props){
    super(props);
    this.currentFile = this.props.;
    const fs = require('fs');
    const path = require('path');
  }
  
  render(){
    return(this.currentFile)
    );
  }
}