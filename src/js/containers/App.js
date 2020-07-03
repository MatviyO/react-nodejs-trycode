import React from 'react';
import {Header} from "semantic-ui-react";
import brace from 'brace';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function App() {
    return (
        <div>
            <div className="header">
                <Header size='huge'>TryCode</Header>
            </div>
            <div className="editor">
                <AceEditor
                    mode="java"
                    theme="github"
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                />
            </div>
        </div>
    );
}

export default App;
