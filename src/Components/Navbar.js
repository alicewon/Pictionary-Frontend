import React from 'react'
// import ReactDOM from "react-dom"
import logo from '../images/logo.png'

// Material-UI Imports:
import AppBar from '@material-ui/core/AppBar'





class Navbar extends React.Component {

  render() {
    return(
      <div className="app-holder">
        <AppBar color="secondary" position="static">
          <div className="logo-holder">
           <img src={logo} alt="pictionary logo"/>
          </div>
        </AppBar>
        
      </div>
    )
  }
}

export default Navbar
