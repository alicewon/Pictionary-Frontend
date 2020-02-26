import React from 'react'
// import ReactDOM from "react-dom"
import logo from '../images/logo.png'
import AppBar from '@material-ui/core/AppBar'


// Material-UI Imports:
//import AppBar from '@material-ui/core/AppBar'

// Semantic-UI Imports:
import { Menu } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom'


class Navbar extends React.Component {
  
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  
  render() {
    const { activeItem } = this.state

    return (
      <div className="app-holder">

        <AppBar color="secondary" position="static">
            <Menu.Item className="logo-holder">
                <div >
                <img src={logo} alt="pictionary logo"/>
                </div>
            </Menu.Item>
            <Menu.Menu position='left'>
                <Menu.Item
                  as={NavLink} to ="/"
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                />
                
                <Menu.Item
                as={NavLink} to="/game"
                name='Draw'
                active={activeItem === 'drawing'}
                onClick={this.handleItemClick}
                />

                <Menu.Item
                  as={NavLink} to="/profile"
                  name='my profile'
                  active={activeItem === 'profile'}
                  onClick={this.handleItemClick}
                />
          </Menu.Menu>
      
            

      </AppBar>
    </div>
    )
  }
}
export default Navbar

