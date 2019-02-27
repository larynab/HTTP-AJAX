import React, { Component } from 'react';

import Friends from './friends/Friends';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Friends />
      </div>
    );
  }
}

export default App;
