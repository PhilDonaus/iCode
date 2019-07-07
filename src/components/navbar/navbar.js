import React, {Component} from 'react';
import { render } from 'react-dom';
import ButtonGroup from 'react-bootstrap/buttongroup';
import Button from 'react-bootstrap/button';

export default class Switcher extends Component{
  
  
  render(){
    return(
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">HTML</Button>
          <Button variant="secondary">CSS</Button>
          <Button variant="secondary">JS</Button>
        </ButtonGroup>
      </div>);
  }
}