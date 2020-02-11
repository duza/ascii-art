import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import execute from '../helpers/command';
import Canvas from './Canvas';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {};
  }

  handleSetState = newState => this.setState(newState);

  executeCommands = string => {
    try {
      const commands = string.trim('\n').split('\n');

      for (let command of commands) {
        this.setState(({ canvas }) => ({
          canvas: execute(command, canvas, this.handleSetState)
        }));
      }
    } catch (e) {
      console.error(e);
      this.setState({ error: e });
    }
  };

  handleReadFile = file => {
    let reader = new FileReader();

    reader.readAsText(file);
    reader.onload = () => this.executeCommands(reader.result);
    reader.onerror = () => {
      console.error(reader.error);
      this.setState({ error: reader.error });
    }
  };

  handleUploadFile = () => {
    try {
      let file = this.inputRef.current.files[0];

      this.handleReadFile(file);
    } catch (e) {
      console.error(e);
      this.setState({ error: e });
    }
  };

  render() {
    const { canvas, error } = this.state;

    return (
      <ErrorBoundary>
        {hasError => (
          <>
            <h1>ASCII art</h1>
            {(hasError || error)
              ? <h2>Something went wrong. Please reload page.</h2>
              : (
                <>
                  <input type='file' ref={this.inputRef} onChange={this.handleUploadFile} />
                  {canvas && <Canvas {...canvas}/>}
                </>
            )}
          </>
        )}
      </ErrorBoundary>
    );
  }
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
