import React, { Component } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

const INITAL_STATE = {
  username: ""
}

class Signup extends Component {
  state = INITAL_STATE

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.postPlayer(this.state)
    this.setState(INITAL_STATE)
  }

  render() {
    return(
      this.props.newSignUp ? ( < Redirect to="/login"/> ) : (
      <>

        <Grid className="account-form" centered columns={3}>
          <Grid.Column>
          <h3>Signup for a Pixionary Account: </h3>
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Field>
                <label>Pick a Username</label>
                <input 
                  type="text" 
                  name="username" 
                  value={this.state.username} 
                  onChange={this.handleChange} 
                  placeholder='Username' 
                />
              </Form.Field>
              {/* <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field> */}
              
              <Button secondary type='submit'>Signup</Button>
            </Form>
          </Grid.Column>
        </Grid> 
      </>
      )
    )
  }
}

export default Signup