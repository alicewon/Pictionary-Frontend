import React, { Component } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react'
import { api } from '../services/api';

// const INITIAL_STATE = {
//   username: ""
// }

class Login extends Component {
  constructor() {
    super()
    this.state = {
      error: false,
      fields: {
        username: '',
        password: ''
      }
    }
  }

  handleOnChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value }
    this.setState({ fields: newFields})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    api.auth.login(this.state.fields).then(res => {
      if (!res.error) {
        this.props.onLogin(res)
        this.props.history.push('/')
      } else {
        this.setState({ error: true })
      }
    })
    
  }

  render() {
    const { fields } = this.state
    return(
      <>
        <Grid className="account-form" centered columns={3}>
          <Grid.Column>
          {this.state.error ? <h1>Try again...</h1> : null}
            <Form onSubmit={this.handleOnSubmit}>
            <h3>Login to your Pixionary Account: </h3>
              <Form.Field>
                <label>Username</label>
                <input 
                  name="username"
                  placeholder='Username'
                  value={fields.username}
                  onChange={this.handleOnChange}
                  />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input 
                  name="password"
                  type="password"
                  placeholder="password" 
                  value={fields.password}
                  onChange={this.handleOnChange}
                  />
              </Form.Field>
              
              <Button secondary type='submit'>Login</Button>
            </Form>
          </Grid.Column>
        </Grid> 
      </>
    )
  }
}

export default Login