import React from 'react'
import DrawingPad from './DrawingPad'
import GameStatusBar from './GameStatusBar'
//import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// const actioncable = require("actioncable")



class DrawingContainer extends React.Component {
 
  // componentDidMount() {
  //   //this.cable = actioncable.createConsumer('ws://localhost:3000/cable')
  //   // this.draw()

  //   this.canvasChannel = this.cable.subscriptions.create({
  //     channel: `DrawingsChannel`
  //     // id: this.props.paramsId
  // },{
  //     connected: () => {
  //         console.log("Drawing.js has connected!")
  //     },
  //     disconnected: () => this.toggleConnection(),
  //     received: data => {console.log(data)}
 
  // })
  // }

  render = () => {
    return(

      <React.Fragment>
        <GameStatusBar
              username={this.props.username}
            />
        {/* <CssBaseline /> */}
      
          <Container maxWidth="sm">
          
            <DrawingPad 
              CableApp={this.props.CableApp}
              username={this.props.username}
              // drawData={this.props.drawData}
              // drawHandler={this.props.drawHandler}
            />
            {/* <div className="newDrawingForm">
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
            </div> */}
          </Container>
      </React.Fragment>
    )
  }
}

export default DrawingContainer