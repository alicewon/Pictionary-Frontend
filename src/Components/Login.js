import React, { Component } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react'

const INITIAL_STATE = {
  username: ""
}

class Login extends Component {
  state = INITIAL_STATE

  handleOnChange = e => {
    this.setState({username: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    
  }

  render() {
    return(
      <>
        <Grid className="account-form" centered columns={3}>
          <Grid.Column>
            <Form>
            <h3>Login to your Pixionary Account: </h3>
              <Form.Field>
                <label>Username</label>
                <input placeholder='Username' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field>
              
              <Button secondary type='submit'>Signup</Button>
            </Form>
          </Grid.Column>
        </Grid> 
      </>
    )
  }
}

export default Login