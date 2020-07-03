import React from 'react';
import { Header } from "semantic-ui-react";
import brace from 'brace';
import AceEditor from "react-ace/types";

import 'brace/mode/javascript'

function App() {
    return (
        <div>
            <div className="header">
                <Header size='huge'>TryCode</Header>
            </div>
            <div className="editor">
                <TextArea rows={30}  />
            </div>
        </div>
    );
}

export default App;
