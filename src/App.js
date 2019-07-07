import React, { Component } from 'react';
import { Tab, Nav, Row, Col, TabContainer } from 'react-bootstrap';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/mode/html';
import 'brace/theme/monokai';
import './index.css';


export default class App extends Component {

  
  render(){
    const appstyle = {
    width:'100vw',
    height:'100vh',
    overflow:'hidden',
    verticalAlign:'middle',
  }
    
    
    return(
      <div className="theApp" style={appstyle}>
        <Row>
          <Col sm={7}>
            <Pagination/>
          </Col>
          <Col sm={5}>
            <Displayer pageURL='userdir/index.html'/>
          </Col>
        </Row>
      </div>
    );
  }
  
}
class Pagination extends Component {
  constructor(props, context) {
    super(props,context);
    this.ListBuilder = this.ListBuilder.bind(this);
    this.IDEBuilder = this.IDEBuilder.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      key:'index.html',
      profiles:[
        {
          fname:'index.html',
          ftype:'html',
          fcontent:`<!DOCTYPE html>
<html>
    <head>
        <title>I Can Code!</title>      
    </head>
    <body>
        <script type="text/javascript" src="javascript.js"></script>
        <h1>Hi There! I can Code!</h1>
        <p class="light">See I can do it with this works</p>
        <button onclick={go()}>Do This</button>
    </body>
</html>`
        },
        {
          fname:'style.css',
          ftype:'css',
          fcontent:`body {color:blue;}`
        },
        {
          fname:'javascript.js',
          ftype:'javascript',
          fcontent:`function go(){
  alert("I DID IT!!");
}`
        }
      ]
    };
  }


  ListBuilder(lobject){
    const mystyle = {
      margin:'auto',
      textAlign:'center'
    };
    
    return(
      lobject.map((filename,index) => (
      <Nav.Item>
        <Nav.Link style={mystyle} eventKey={filename.fname}>{filename.fname}</Nav.Link>
      </Nav.Item>
      )
    ));
  }
  
  onChange(){
    //Write to File
    //Update the State
    //Trigger Display Function for Window
  }
  
  IDEBuilder(lobject){
    return(
      lobject.map((mytype,index) => (
      <Tab.Pane eventKey={mytype.fname}>
          <AceEditor
            placeholder="Placeholder Text"
            height="90vh"
            width="100%"
            mode={mytype.ftype}
            theme="monokai"
            name="myeditor"
            onLoad={this.onLoad}
            onChange={this.onChange}
            fontSize={12}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={mytype.fcontent}
            setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 4,
            }}/>
      </Tab.Pane>
      )
    ));
  }
  render(){
    const mystyle = {
      margin:'auto',
      textAlign:'center'
    };
    
    const nopad = {
      padding: '2px'
    };
    
    return(
      <Tab.Container defaultActiveKey={this.state.key} className="ide">
        <Row>
          <Col sm={3} style={nopad}>
            <Nav variant="pills" className="flex-column">
              {this.ListBuilder(this.state.profiles)}
              <Nav.Item>
                <Nav.Link style={mystyle}><p>+ (New File)</p></Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} style={nopad}>
            <Tab.Content>
              {this.IDEBuilder(this.state.profiles)}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }
}

class Displayer extends Component {
  
  componentDidMount(){
    this.compile();
    
  }
  compile() {
    document.getElementById('viewer').src = this.props.pageURL;
  };
  
  render(){
    return(
      <div className="displaycode">
        <iframe id="viewer" src=""></iframe>
      </div>
    );
  }
}