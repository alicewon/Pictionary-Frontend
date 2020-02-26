import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid, Image } from 'semantic-ui-react'

class GameStatusBar extends React.Component {
  render() {
    return(
      <React.Fragment>
        
        <Segment raised className="game-status-bar">
          <Grid columns={4} divided>
            <Grid.Row>
              <Grid.Column>
                <h5>{this.props.username}</h5>
                <h3>274 Points</h3>
              </Grid.Column>
              <Grid.Column>
                <h5>Your Word:</h5>
                <h3>LLAMA</h3>
              </Grid.Column>
              <Grid.Column>
                
                <h5>Time Remaining:</h5>
                <h3>0:42</h3>
              </Grid.Column>
              <Grid.Column>
              <h5>Oponent:</h5>
                <h3>bananacat</h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </React.Fragment>
    )
  }

}

export default GameStatusBar




