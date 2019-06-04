import React, { Component } from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
 
import 'brace/mode/java';
import 'brace/mode/html';
import 'brace/theme/monokai';
import './editor.css';

export default class Editor extends Component {
  constructor(props){
    super(props);
    this.onChangeHTML = this.onChangeHTML.bind(this);
    this.onChangeCSS = this.onChangeCSS.bind(this);
    this.onChangeJS = this.onChangeJS.bind(this);
    this.state = {html:`<!DOCTYPE html>
<html>
    <head>
        <title>I Can Code!</title>
    </head>
    <body>
        <h1>Hi There! I can Code!</h1>
        <p class="light">See I can do it with a hilighter</p>
    </body>
</html>`,
                  css:`body {color:blue}`,
                  js: `function onLoad(editor){ console.log("i've loaded!!");}`}
  }
  onChangeHTML(newValue) {
    this.setState({html:newValue});
    
    console.log(newValue);
  }
  onChangeCSS(newValue) {
    this.setState({css:newValue});
    
    console.log(newValue);
  }
  onChangeJS(newValue) {
    this.setState({js:newValue});
    
    console.log(newValue);
  }
  
  render(){
    return(
      <div className="row">
        <div className="col">
          <CodeIDE 
            mycode={this.state.html}
            onChange={this.onChangeHTML}
            mymode={'html'}
            />
          <CodeIDE 
            mycode={this.state.css}
            onChange={this.onChangeCSS}
            mymode={'css'}
            />
          <CodeIDE 
            mycode={this.state.js}
            onChange={this.onChangeJS}
            mymode={'javascript'}
            />
        </div>
        <div className="col">
          <RenderDisplay
            htmlData={this.state.html}
            cssData={this.state.css}
            jsData={this.state.js}
            />
          </div>
      </div>)
  };
}


class CodeIDE extends Component {
	render(){
  	return(
      <div>
          <AceEditor
            placeholder="Placeholder Text"
            height="100vh"
            width="100%"
            mode={this.props.mymode}
            theme="monokai"
            name="myeditor"
            onLoad={this.props.onLoad}
            onChange={this.props.onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={this.props.mycode}
            setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 4,
            }}/>
      </div>
	);
  };
}


class RenderDisplay extends Component {
  componentDidMount(){
    this.compile();
  }
  compile = () => {
    var code = document.getElementById("displaycase").contentWindow.document;
    document.body.onkeyup = () => {
      code.open();
      code.writeln(
        this.props.htmlData +
          `<style>` +
          this.props.cssData +
          `</style>` +
          `<script>` +
          this.props.jsData +
          `</script>`
      );
      code.close();
    };
  }
  render(){
      return(
          <div className="displayCode">
              <iframe id="displaycase"></iframe>
          </div>
  );
  }
}