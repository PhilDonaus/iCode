import React, { Component } from 'react';

import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
 
import 'brace/mode/java';
import 'brace/theme/github';
 
function onChange(newValue) {
	  console.log('change',newValue);
	}

function onSelectionChange(selection) {
  const content = this.refs.aceEditor.editor.session.getTextRange(selection.getRange());
  console.log(content);
  // use content
}


export default class editor extends Component {


	render(){
  	return(
  	<div>
  		<AceEditor
			placeholder="Placeholder Text"
			mode="javascript"
			theme="monokai"
			name="blah2"
			onLoad={this.onLoad}
			onChange={this.onChange}
			fontSize={14}
			showPrintMargin={true}
			showGutter={true}
			highlightActiveLine={true}
			value={`function onLoad(editor) {
			console.log("i've loaded");
			}`}
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