import React from 'react'
import { Segment, Input, Grid, Form } from 'semantic-ui-react'


class ChatWindow extends React.Component {


  handleSendEvent = (event) =>{
    event.preventDefault()
    this.props.sendChat()


  }

  handleChange = (event) => {
    this.setState({message: event.target.value})
  }


  render () {
    console.log(this.props.CableApp)

    
    
    return(
      <>
        <Grid celled className="chat-window-outer">
          <Grid.Row>
            <Grid.Column width={16} >
              <Segment className="chat-window"/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} >
              <Form 
                onSubmit={event => this.handleSubmit(event)}>
                <Input 
                  type="text"
                  onChange={event => this.handleChange(event)}
                  action='Send' placeholder='Guess here...' 
                  // value={this.state.message}
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      
      {/* from tutorial http://jameshuynh.com/rails/react%20js/chat/2017/07/30/build-chat-using-react-js-and-rails-action-cable/ */}
          {/* <div className='stage'>
            <h1>Type your guess below:</h1>
            <div className='chat-logs'>
            </div>
            <input
              type='text'
              placeholder='Enter your message...'
              className='chat-input'
              value={this.props.currentMessage}
              onChange={ (e) => this.props.updateCurrentMessage(e) }
              />
            <button 
              onClick={ (e) => this.handleSendEvent(e)}
              className='send'>
              Send
            </button>
          </div> */}

      </>
    )
  }
}

export default ChatWindow