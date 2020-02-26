import React from "react";
import { Segment, Grid} from 'semantic-ui-react'

class ProfileDrawings extends React.Component {

  render() {
    return(
      <div>    
        <Segment padded='very' className="profile-drawings-section">
          <Grid columns={3} divided>
              <Grid.Row>
                <Grid.Column>
                  <h3>Drawing 1</h3>
                </Grid.Column>


                <Grid.Column>
                <h3>Drawing 2</h3>
                </Grid.Column>


                <Grid.Column>
                <h3>Drawing 3</h3>
                </Grid.Column>
                
              </Grid.Row>
            </Grid>
          
        </Segment>
      </div>
    )
  }

}

export default ProfileDrawings