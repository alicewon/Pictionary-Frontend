import React from 'react'
// import ReactDOM from "react-dom"
import logo from '../images/logo.png'
import AppBar from '@material-ui/core/AppBar'


// Material-UI Imports:
//import AppBar from '@material-ui/core/AppBar'

// Semantic-UI Imports:
import { Menu } from 'semantic-ui-react'
import { NavLink} from 'react-router-dom'

// const currentUser = props.currentUser
// const loggedIn = !!this.props.currentUser.id
class Navbar extends React.Component {

  
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  handleLogout = (name) => {
    this.setState({ activeItem: name})
    this.props.logout()
    alert("You've been logged out!")
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
                  as={NavLink} to="/profile"
                  name='my profile'
                  active={activeItem === 'profile'}
                  onClick={this.handleItemClick}
                  user={this.state.auth}
                />
                  {!localStorage.token ? 
                  <>
                <Menu.Item
                  as={NavLink} to="/login"
                  name='Login'
                  active={activeItem === 'login'}
                  onClick={this.handleItemClick}
                /> 

                <Menu.Item
                  as={NavLink} to="/signup"
                  name='Signup'
                  active={activeItem === 'signup'}
                  onClick={this.handleItemClick}
                /> 
                </>
                : null   
                  }  

                {localStorage.token ? 
                <Menu.Item
                  as={NavLink} to="/"
                  name='Logout'
                  active={activeItem === 'signup'}
                  onClick={this.handleLogout}
                >Logout</Menu.Item>  : null
                
                }

                {localStorage.token ?
                
                  <Menu.Item
                  as={NavLink} to="/profile"
                  >Hello {this.props.user.username}</Menu.Item>
              :null
                }


          </Menu.Menu>
      
            

      </AppBar>
    </div>
    )
  }
}
export default Navbar

