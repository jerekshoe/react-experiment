// Libary imports
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hey there</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
