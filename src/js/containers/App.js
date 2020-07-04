import React from 'react';
import {Header} from "semantic-ui-react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"

import socket from "../socket/socket";


class App extends React.Component {

    constructor(props) {
        super(props)
       this.state = {
            value: ''
       }
    }
   handleChange(value) {
       socket.emit('CHANGE_CLIENT', value);
       this.setState({
           value
       })
   }
   componentDidMount() {
       socket.on('CHANGE_SERVER', data => {

       });
   }

    render() {
        return (
            <div>
                <div className="header">
                    <Header size='huge'>TryCode</Header>
                </div>
                <div className="editor">
                    <AceEditor
                        mode="javascript"
                        theme="github"
                        onChange={value => {
                            socket.emit('CHANGE', value)
                        }}
                        name="editor"
                        fontSize={18}
                        editorProps={{$blockScrolling: true}}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default App;
