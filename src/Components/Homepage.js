import React from 'react';
import DrawingContainer from './DrawingContainer.js'
import ChatContainer from './ChatContainer.js'
import CssBaseline from '@material-ui/core/CssBaseline';
//import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button';
import {Link} from  'react-router-dom';
import { Grid, Image } from 'semantic-ui-react'
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


class Homepage extends React.Component {
  state = {}
  
  
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  
  render() {
    const { children } = this.props
    const { fixed } = this.state

  return(

    <div>

      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment placeholder
            className="homepage-banner"
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Segment.Inline maxWidth="sm">
              <h1>Welcome to Pictionary! Click below to play.</h1>
            {/* </Segment>
            <Segment maxWidth="sm"> */}
              <Link to="/game"> 
                <Button 
                  variant="contained" 
                  color="primary" 
                  disableElevation>
                  New Game
                </Button>
              </Link>
            </Segment.Inline>  
          </Segment>


          <Segment className="placeholder-images-group">
            <Grid relaxed columns={3}>
              <Grid.Column>
                <Image src='https://www.throwbacks.com/content/images/2017/10/20120320-140135.jpg' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2018/11/h2O1rvh-h33WJ0TV_ll0jKLeSuOMZOLLUEgN2NN65ZTacJ2LtnvlKka7RXyJEWSet8m3fXjuKXa2ujBqftoNt9WxnLdyRJeXMnl4Pvv0QmwRD-ml5tcSj-vbWaVVJ10u49_Voz-t-768x292.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='https://kloodoo.files.wordpress.com/2012/09/20120907-091058.jpg' />
              </Grid.Column>
            
            </Grid>
          </Segment>
        </Visibility>

        {children}
      </Responsive>

    
  </div>

  )
}
}

export default Homepage