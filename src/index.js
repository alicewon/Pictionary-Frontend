import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import actioncable from 'actioncable'

// const CableApp = {}

//   //CableApp.cable= actionCable.createConsumer('ws://localhost:3000/cable')
//   //this.cable = actioncable.createConsumer('ws://localhost:3000/cable')
//   // this.draw() API_WS_ROOT ws://localhost:3000/cable
//   CableApp.cable = actioncable.createConsumer('ws://localhost:3000/cable')

//   CableApp.drawingChannel = CableApp.cable.subscriptions.create({
//     channel: `DrawingsChannel`
// },{
//     connected: () => {
//         console.log("Index.js has connected!")
//     },
//     // disconnected: () => this.toggleConnection(),
//     // received: data => {console.log(data)}
    
//     received: (data) => {
//       console.log("DATA HAS BEEN RECEIVED ON INDEX.JS")
//       //a callback function that is called once everytime the server sends realtime data to Consumer
//     },

// })

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
