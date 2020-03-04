import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Grid, Button} from 'semantic-ui-react'
import Timer from './Timer'

class GameStatusBar extends React.Component {
  render(props) {
    return(
      <React.Fragment>
        
        <Segment raised className="game-status-bar">
          <Grid columns={2} divided>
            <Grid.Row>
             
              <Grid.Column>
              <h5>Your Word:</h5>
                <h1 className="word">{this.props.word}</h1>
                <Button onClick={this.props.getWord}>Change Word</Button>
              </Grid.Column>
              <Grid.Column>
                
                <h5>Time Remaining:</h5>
                <Timer/>
              </Grid.Column>
              
            </Grid.Row>
          </Grid>
        </Segment>
      </React.Fragment>
    )
  }

}

export default GameStatusBar




