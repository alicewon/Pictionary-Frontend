import React from "react";
import { Header, Image, Segment, Grid, Button } from 'semantic-ui-react'
import {Link} from  'react-router-dom';


class ProfileHeader extends React.Component {

  render() {
    return(
      <div>    
        <Segment padded='very' className="profile-header-section">
          <Grid columns={3} divided>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h2'>
                    <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                    <h2>{this.props.user.username}</h2>
                  </Header>
                </Grid.Column>

                <Grid.Column>
                  <ul>
                    <li>Total Games Played: 106</li>
                    <li>Total Drawings: 48</li>
                    <li>Winning Drawings: 29</li>
                    <li>Average Time to Guess: 0:27</li>
                  </ul>
                </Grid.Column>

                <Grid.Column>
                  <Link to="/game"> 
                    <Button 
                      variant="contained" 
                      color="primary" 
                      disableElevation>
                      NEW GAME
                    </Button>
                  </Link>
                </Grid.Column>
                
              </Grid.Row>
            </Grid>
          
        </Segment>
      </div>

    )
  }

}

export default ProfileHeader