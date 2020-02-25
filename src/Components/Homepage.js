import React from 'react';
import DrawingContainer from './DrawingContainer.js'
import ChatContainer from './ChatContainer.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';



class Homepage extends React.Component {

render() {
  return(

  <div>
    <React.Fragment>
        <CssBaseline />
      
          <Container maxWidth="sm">
            {/* <DrawingContainer cableApp={this.props.cableApp}/>
            <ChatContainer /> */}
            <h1>Welcome to Pictionary! Click below to play.</h1>
            </Container>
            <Container maxWidth="sm">
            <Button 
              variant="contained" 
              color="primary" 
              disableElevation>
              New Game
            </Button>

          </Container>
        </React.Fragment>
  </div>

  )
}
}

export default Homepage