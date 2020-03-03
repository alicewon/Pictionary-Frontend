import React from 'react';
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Logout from './Components/Logout'
import Homepage from './Components/Homepage'
import DrawingContainer from './Components/DrawingContainer'
import ProfileContainer from './ContainerComponents/ProfileContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import './index.css';
import actioncable from 'actioncable'
import { api } from "./services/api"

const playersURL = "http://localhost:3000/players"

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
      newSignUp: false,
      auth: {
        player: {}
      },
      drawData: {},
      username: 'alwaysNicole94'
    }
  }
//move index.js cable stuff to app.js, move to DrawingPad Component

//create state for drawing string (parse later to get out of JSON string JSON.parse() before saving so that it's an obj for redrawing on other canvas)

//---------------

//receive this.setstate.canvas  - data goes in here, turn into object and then store in state?

// after parsing, if drawing data, updating drawing state. If chat data, update state of chat

componentDidMount() {
  const token = localStorage.getItem("token")
  if (token) {
    api.auth.getCurrentUser().then(player => {
      const updatedState = {...this.state.auth, player: player }
      console.log(player)
      this.setState({auth: updatedState })
    })
  }
}

// Sign Up: POST user to database
postPlayer = (player) => {
  fetch(playersURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(player)

  }).then(res => res.json())
  .then(data => {
    if (data.error) {
      alert(data.error)
    }
    else {
    alert(data.success)
    this.setState({ newSignUp: true })
    }
  })
}

login = data => {
  const updatedState = {...this.state.auth, player: {id: data.id, username: data.username} }
  localStorage.setItem("token", data.jwt)
  this.setState({auth: updatedState})
}

logout = () => {
  localStorage.removeItem("token")
  this.setState( {auth: {user: {} } })
}

  render() {
    return(

    <div>
      <Router>
        <Navbar 
          logout={this.logout}
          user={this.state.auth.player}
          />

        <Route
            path="/"
            exact
            render={() => <Homepage 
              username={this.state.username}
              user={this.state.auth}
            />}
          />

        <Route 
          path="/game"
          exact
          render={ (props)=> <DrawingContainer 
            CableApp={CableApp}
            drawData={this.state.drawData}
            drawHandler={this.props.drawHandler}
            username={this.state.username}
            {...props}

        
          />}
        />

        <Route 
          path="/profile"
          exact
          render={ ()=> <ProfileContainer 
            username={this.state.username}
            user={this.state.auth.player}
        
          />}
        />

        <Route 
          path="/login"
          exact
          render={props => < Login {...props} onLogin={this.login} />}
        />

        <Route 
          path="/signup"
          exact
          render={ ()=> < Signup
            username={this.state.username}
            postPlayer={this.postPlayer}
            newSignUp={this.state.newSignUp}
          />}
        />
        
        <Route 
          path="/logout"
          exact
          render={ ()=> < Logout
            username={this.state.username}
            postPlayer={this.postPlayer}
            newSignUp={this.state.newSignUp}
            isLoggedIn={this.state.isLoggedIn}
            logout={this.logout}
          />}
        /> 
        
        
        
      </Router> 
    </div>
    )
  }
}

export default App;
