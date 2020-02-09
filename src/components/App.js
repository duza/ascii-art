import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleUploadFile = () => {
    let file = this.inputRef.current.files[0];

    alert(`File name: ${file.name}`);
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
