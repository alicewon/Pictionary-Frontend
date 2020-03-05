import React from 'react'
import DrawingPad from './DrawingPad'
import GameStatusBar from './GameStatusBar'
import { Grid } from 'semantic-ui-react'
import ChatWindow from './ChatWindow'
//import CssBaseline from '@material-ui/core/CssBaseline';
// const actioncable = require("actioncable")
import { api } from "../services/api";



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

  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push("/login")
    } else {
      api.auth.getCurrentUser()
    }
  }

  render = () => {
    return(

      <React.Fragment>
        <GameStatusBar
          user={this.props.user}
          getWord={this.props.getWord}
          word={this.props.word}
          // word={this.props.getWords()}
        />

        {/* <GameStarter>
          user={this.props.user}
        </GameStarter> */}
        {/* <CssBaseline /> */}
      
          {/* <Container maxWidth="sm"> */}
          <Grid columns={2}>
            <Grid.Row className="drawing-outer">
              <Grid.Column width={10}>
                <DrawingPad 
                  CableApp={this.props.CableApp}
                  username={this.props.username}
              // drawData={this.props.drawData}
              // drawHandler={this.props.drawHandler}
                />
                 </Grid.Column>
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
                  <Grid.Column width={4}>
                    <ChatWindow 
                      CableApp={this.props.CableApp}
                    />
                  </Grid.Column>
               
              </Grid.Row>
            </Grid>
          {/* </Container> */}
      </React.Fragment>
    )
  }
}

export default DrawingContainer