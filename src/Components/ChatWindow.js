import React from 'react'
import { Segment, Input, Grid } from 'semantic-ui-react'


class ChatWindow extends React.Component {


  render () {
console.log(this.props.CableApp)
    this.props.CableApp.chatChannel = this.props.CableApp.cable.subscriptions.create({
      channel: `ChatChannel`
  },
  {
    connected: () => {
        console.log("CHATWINDOW has connected!")
    },

    received: (data) => { 
      console.log(data) }
  }
    )
    
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

                <Input action='Send' placeholder='Guess here...' 
                />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

export default ChatWindow