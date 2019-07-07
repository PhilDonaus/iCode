import React, { Component } from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';


 
import 'brace/mode/java';
import 'brace/mode/html';
import 'brace/theme/monokai';


export default class CodeIDE extends Component {
	render(){
  	return(
      <div>
          <AceEditor
            placeholder="Placeholder Text"
            height="80vh"
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


