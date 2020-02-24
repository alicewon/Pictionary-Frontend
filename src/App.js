import React from 'react';
import Drawing from './Components/Drawing.js'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      allRooms: [],
      currentRoom: {
        room: {},
        users:[],
        messages: []
      }
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
