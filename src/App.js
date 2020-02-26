import React from 'react';
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import DrawingContainer from './Components/DrawingContainer'
import ProfileContainer from './ContainerComponents/ProfileContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import './index.css';
import actioncable from 'actioncable'

//import { BrowserRouter as Router } from 'react-router-dom'
//import * as serviceWorker from './serviceWorker';
//import Homepage from './Components/Homepage';

const CableApp = {}
  CableApp.cable = actioncable.createConsumer('ws://localhost:3000/cable')
//   CableApp.drawingsChannel = CableApp.cable.subscriptions.create({
//     channel: `DrawingsChannel`
// },{
//     connected: () => {
//         console.log("Index.js has connected!")
//     },
//     // disconnected: () => this.toggleConnection(),
//     // received: data => {console.log(data)}
    

//     //state needs to be updated on receive at the Drawing Pad levelse
//     received: (data) => {
//       // this.setState(
//       //   { drawData: data }
//       // )
//       console.log("new drawing stuff")
//       console.log(data)
//       //a callback function that is called once everytime the server sends realtime data to Consumer
//     },
// })



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      drawData: {},
      username: 'alwaysNicole94'
    }
  }
//move index.js cable stuff to app.js, move to DrawingPad Component

//create state for drawing string (parse later to get out of JSON string JSON.parse() before saving so that it's an obj for redrawing on other canvas)

//---------------

//receive this.setstate.canvas  - data goes in here, turn into object and then store in state?

// after parsing, if drawing data, updating drawing state. If chat data, update state of chat
  

  render() {
    return(

    <div>
      <Router>
        <Navbar/>

        <Route
            path="/"
            exact
            render={() => <Homepage 
              username={this.state.username}
            />}
          />

        <Route 
          path="/game"
          exact
          render={ ()=> <DrawingContainer 
            CableApp={CableApp}
            drawData={this.state.drawData}
            drawHandler={this.props.drawHandler}
            username={this.state.username}
        
          />}
        />

        <Route 
          path="/profile"
          exact
          render={ ()=> <ProfileContainer 
            username={this.state.username}
        
          />}
        />
        
      </Router> 
    </div>
    )
  }
}

export default App;
