import React from 'react'
import ReactDOM from "react-dom"
import CanvasDraw from "react-canvas-draw"
import ChatWindow from './ChatWindow'
import {Grid } from 'semantic-ui-react'

ReactDOM.render(<CanvasDraw />, document.getElementById("root"));


class DrawingWatch extends React.Component {

  state = {
    color: "#000",
    width: 400,
    height: 400,
    brushRadius: 0,
    lazyRadius: 0,
    immediateLoading:true,
    loadTimeOffset: 0
  }

  
  render = () => {

    this.props.CableApp.drawingsChannel = this.props.CableApp.cable.subscriptions.create({
      channel: `DrawingsChannel`
  },{
      connected: () => {
          console.log("Index.js has connected!")
      },
      received: (data) => {
        console.log(data.drawing_data)
        this.loadableCanvas.loadSaveData(
         data.drawing_data
        );
      },
  })

    return(
      <>
        <div className="watch-outer-container">
          <Grid columns={2}>

            <Grid.Row>
              <Grid.Column width={10}>
                <h2>Guess the Word:</h2>
                <CanvasDraw
                  className="canvasbox"
                  disabled
                  hideGrid
                  ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
                  saveData={localStorage.getItem("savedDrawing")}
                  immediateLoading={this.state.immediateLoading}
                  loadTimeOffset={this.state.loadTimeOffset}
                />

              </Grid.Column>

              <Grid.Column width={4}>
                <ChatWindow 
                  CableApp={this.props.CableApp}
                  postMessages={this.props.postMessages}
                  messages={this.props.messages}
                  currentMessage={this.props.currentMessage}
                  updateCurrentMessage={this.props.updateCurrentMessage}
                  sendChat={this.props.sendChat}
                  createSocket={this.props.createSocket}
                />
              </Grid.Column>
            </Grid.Row>
        
            </Grid>
        </div>
      </>
    )
  }
}

export default DrawingWatch