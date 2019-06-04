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
    this.state = {html:`<p>We Did it!</p>`,
                  css:`body {color:blue}`,
                  js: `function onLoad(editor){ console.log("i've loaded!!");}`}
  }
  onChange(newValue) {
    console.log(newValue);
  }
  
  render(){
    return(
      <div>
        <CodeIDE 
          mycode={this.state.html}
          onChange={this.onChange}
          mymode={'html'}
          />
        <CodeIDE 
          mycode={this.state.css}
          onChange={this.onChange}
          mymode={'css'}
          />
        <CodeIDE 
          mycode={this.state.js}
          onChange={this.onChange}
          mymode={'javascript'}
          />
        <RenderDisplay
          htmlData={this.state.html}
          cssData={this.state.css}
          jsData={this.state.js}
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
              mode={this.props.mymode}
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


class RenderDisplay extends Component {
  componentDidMount(){
        this.compile();
    }

    compile() {
        var code = document.getElementById("displaycase").contentWindow.document;
      
        document.body.onkeyup = () => {
          code.open();
          code.writeln(
            this.props.htmlData +
              "<style>" +
              this.props.cssData +
              "</style>" +
              "<script>" +
              this.props.jsData +
              "</script>"
          );
          code.close();
        };
      }
    render(){
        return(

            <div className="col s6">
                <iframe id="displaycase"></iframe>
            </div>
    )
    }
}