import React, { Component } from 'react';

import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
 
import 'brace/mode/java';
import 'brace/mode/html';
import 'brace/theme/monokai';
 

export default class Editor extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {mycode: `function onLoad(editor) {
                  console.log("i've loaded!!");`}
  }
  onChange(newValue) {
        console.log('change', newValue);
  }
  
  render(){
    return(
      <div>
        <CodeIDE 
          mycode={this.state.mycode}
          onChange={this.onChange}
          />
      </div>)
  };
}


class CodeIDE extends Component {
	render(){
    
  	return(
      <div>
          <AceEditor
              placeholder="Placeholder Text"
              mode="javascript"
              theme="monokai"
              name="blah2"
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
              tabSize: 2,
              }}/>
      </div>
	);
  };
}