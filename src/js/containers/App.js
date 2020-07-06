import React from 'react';
import {Header, Input, Button} from "semantic-ui-react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"
import socket from "../socket/socket";

class App extends React.Component {

    constructor(props) {
        super(props)
       this.state = {
            value: '',
           connected: false,
           room: ''
       }
    }
   handleChange(value) {
       socket.emit('CHANGE_CLIENT', {
           room:this.state.room,
           code: value
       });
       this.setState({
           value
       })
   }
   componentDidMount() {
       socket.on('CHANGE_SERVER', value => {
           this.setState({
               value
           })
       });
   }
   connectRoom() {
       socket.emit('JOIN_ROOM', this.state.room);
       this.setState({
           connected: true
       })
   }

    render() {
        return (
            <div>
                <div className="header">
                    <Header size='huge'>TryCode - {this.state.room}</Header>
                    <Input  onChange={(e) => this.setState({ room: e.target.value})} />
                    <Button disabled={this.connected} onClick={this.connectRoom.bind(this)}>Connect</Button>
                </div>
                <div className="editor">
                    <AceEditor
                        mode="javascript"
                        theme="github"
                        onChange={this.handleChange.bind(this)}
                        name="editor"
                        fontSize={18}
                        editorProps={{$blockScrolling: true}}
                        value={this.state.value}
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
