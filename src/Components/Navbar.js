import React from 'react'
import ReactDOM from "react-dom"
import logo from '../images/logo.png'

class Navbar extends React.Component {

  render() {
    return(
      <div className="nav-holder">
        <img src={logo} />
      </div>
    )
  }
}

export default Navbar
