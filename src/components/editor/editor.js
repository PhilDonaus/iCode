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
    this.onComponentView = this.onComponentView.bind(this);
    
    this.state = {
      html:``,
      css:``,
      js: ``,
      viewData:'js'};
  }
  
  onChangeHTML(newValue) {
    this.setState({html:newValue,viewData:'html'});
  }
  
  onChangeCSS(newValue) {
    this.setState({css:newValue,viewData:'css'});
  }
  
  onChangeJS(newValue) {
    this.setState({js:newValue,viewData:'js'});
  }
  
  onComponentView(page) {
    if (page == 'html'){
      return(
        <div className="row">
          <div className="col">
            <CodeIDE 
              mycode={this.state.html}
              onChange={this.onChangeHTML}
              mymode={'html'}
              />
          </div>
          <div className="col">
            <RenderDisplay
              htmlData={this.state.html}
              cssData={this.state.css}
              jsData={this.state.js}
              />
          </div>
        </div>
      );
    }
    if (page == 'css'){
      return(
        <div className="row">
          <div className="col">
            <CodeIDE 
              mycode={this.state.css}
              onChange={this.onChangeCSS}
              mymode={'css'}
              />
          </div>
          <div className="col">
            <RenderDisplay
              htmlData={this.state.html}
              cssData={this.state.css}
              jsData={this.state.js}
              />
          </div>
        </div>
      )
    }
    if (page == 'js'){
      return(
        <div className="row">
          <div className="col">
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
        </div>
      );
    }
    else{
      return(<h1>Sorry, no Data</h1>);
    }
  }
  
  render(){
    return(
      <div>
          {this.onComponentView(this.state.viewData)}
      </div>);
  };
}

class CodeIDE extends Component {
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
    }
  }
  render(){
      return(
          <div className="displayCode">
              <iframe id="displaycase"></iframe>
          </div>
      );
  }
}
