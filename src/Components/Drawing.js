import React from 'react'
import DrawingArea from './DrawingArea'
import { API_WS_ROOT} from '../constants/index'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar';
const actioncable = require("actioncable")



class Drawing extends React.Component {
  state = {
    text: ''
  }
  
  componentDidMount() {
    this.cable = actioncable.createConsumer(API_WS_ROOT)
    // this.draw()

    this.canvasChannel = this.cable.subscriptions.create({
      channel: `DrawingsChannel`
      // id: this.props.paramsId
  },{
      connected: () => {
          console.log("Drawing.js has connected!")
      },
      disconnected: () => this.toggleConnection(),
      received: data => {console.log(data)}
 
  })
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  // handleSubmit = e => {

  // }

  render = () => {
    return(

      <React.Fragment>
        <CssBaseline />
        <Navbar/>
          <Container maxWidth="sm">
          {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
            <DrawingArea/>
            <div className="newDrawingForm">
              <form onSubmit={this.handleSubmit}>
                <label>Type Something</label>
                <br/>
                <input
                  type="text"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
                <input type="submit"/>
              </form>
            </div>
          </Container>
      </React.Fragment>
    )
  }
}

export default Drawing