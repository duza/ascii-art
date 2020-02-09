import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import execute from '../helpers/command';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  executeCommands = string => {
    const commands = string.trim('\n').split('\n');

    for (let command of commands) {
      execute(command);
    }
  };

  handleReadFile = file => {
    let reader = new FileReader();

    reader.readAsText(file);
    reader.onload = () => this.executeCommands(reader.result);
    reader.onerror = () => alert(reader.error);
  };

  handleUploadFile = () => {
    let file = this.inputRef.current.files[0];

    this.handleReadFile(file);
  };

  render() {
    return (
      <>
        <h1>ASCII art</h1>
        <input type='file' ref={this.inputRef} onChange={this.handleUploadFile} />
      </>
    );
  }
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
