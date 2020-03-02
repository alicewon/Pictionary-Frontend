import React from 'react'
import { Segment, Input, Grid } from 'semantic-ui-react'


class ChatWindow extends React.Component {
  render() {
    return(
      <>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={16} >
            <Segment className="chat-window"/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16} >
            <Input action='Send' placeholder='Guess here...' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </>
    )
  }
}

export default ChatWindow