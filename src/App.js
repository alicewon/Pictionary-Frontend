import React, { Component } from 'react';
import Drawing from './Components/Drawing.js'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    return(
    <div>
      <Drawing />
    </div>
    )
  }
}

export default App;
