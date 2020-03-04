import React from 'react'
import ReactDOM from "react-dom"
import CanvasDraw from "react-canvas-draw"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import ChatWindow from './ChatWindow'
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
      <div>
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
          <ChatWindow />
      </div>
    )
  }
}

export default DrawingWatch