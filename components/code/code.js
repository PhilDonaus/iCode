import React, { Component } from 'react';
import "./code.css"

class Code extends Component {

    componentDidMount(){
        this.compile();
    }

    compile = () => {
        var html = document.getElementById("html");
        var css = document.getElementById("css");
        var js = document.getElementById("js");
        var code = document.getElementById("code").contentWindow.document;
      
        document.body.onkeyup = function() {
          code.open();
          code.writeln(
            html.value +
              "<style>" +
              css.value +
              "</style>" +
              "<script>" +
              js.value +
              "</script>"
          );
          code.close();
        };
      }
    render(){
        return(
    <div>
        <textarea id="html" placeholder="HTML"></textarea>
        <textarea id="css" placeholder="CSS"></textarea>
        <textarea id="js" placeholder="JavaScript"></textarea>
        <iframe id="code"></iframe>
    </div>
    )
}
}

export default Code;