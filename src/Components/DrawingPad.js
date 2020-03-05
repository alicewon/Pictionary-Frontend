import React from 'react'
import ReactDOM from "react-dom"
import CanvasDraw from "react-canvas-draw"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
ReactDOM.render(<CanvasDraw />, document.getElementById("root"));

class DrawingPad extends React.Component {

  state = {
    color: "#000",
    width: 400,
    height: 400,
    brushRadius: 1,
    lazyRadius: 1,
    immediateLoading:true,
    loadTimeOffset: 0
  }

  
  render = () => {

    //let savedDrawData= this.saveableCanvas.getSaveData()

    this.props.CableApp.drawingsChannel = this.props.CableApp.cable.subscriptions.create({
      channel: `DrawingsChannel`
  },{
      connected: () => {
          console.log("Index.js has connected!")
      },
      // disconnected: () => this.toggleConnection(),
      // received: data => {console.log(data)}
      

      //state needs to be updated on receive at the Drawing Pad levelse
      received: (data) => {
        // this.setState(
        //   { drawData: data }
        // )
        // console.log("new drawing stuff")
        console.log(data.drawing_data)



        //let brushstroke = JSON.parse(data.drawing_data).lines.slice(-1)
        //console.log(lines.slice(-1)[0])
        // (JSON.parse(data.drawing_data).lines.pop())
        //console.log(JSON.stringify(newPotato))
        this.loadableCanvas.loadSaveData(
      
          // JSON.stringify(newPotato)

         //JSON.stringify({lines: brushstroke})
         data.drawing_data
          // JSON.stringify(JSON.parse(data.drawing_data).lines.pop())
        );
        //a callback function that is called once everytime the server sends realtime data to Consumer
      },
  })

    return(
      <div>
        
      <h2>DRAW YOUR WORD:</h2>
     
      <CanvasDraw
        className="canvasbox"
        hideInterface hideGrid 
        ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
        brushColor={this.state.color}
        brushRadius={this.state.brushRadius}
        lazyRadius={this.state.lazyRadius}
        canvasWidth={this.state.width}
        canvasHeight={this.state.height}
        immediateLoading={this.state.immediateLoading}
        loadTimeOffset={this.state.loadTimeOffset}

        // onChange={() => console.log(this.saveableCanvas.getSaveData())} //json
        // // this will send the updated drawing save data, each time it is updated, to the web socket server.
        // onChange={() => this.props.CableApp.drawingsChannel.send(this.saveableCanvas.getSaveData())}
        onChange={() => this.props.CableApp.drawingsChannel.send({"drawing_data": this.saveableCanvas.getSaveData()})}
        />
        <br></br>
        <Container maxWidth="sm">
          <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            onClick={() => {
              //saved_drawing = this.saveableCanvas.getSaveData()
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >
            Save
          </Button>
          <Button
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
            Clear
          </Button>
          <Button
            onClick={() => {
              this.saveableCanvas.undo();
            }}
          >
            Undo
          </Button>
          </ButtonGroup>
          </Container>
  

      
      {/* bottom canvas will always be listening to drawings channel  */}
      {/* need to replace local storage with call to server */}
      <CanvasDraw
        className="canvasbox secondcanvas"
        disabled
        hideGrid
        ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
        saveData={localStorage.getItem("savedDrawing")}
        immediateLoading={this.state.immediateLoading}
        loadTimeOffset={this.state.loadTimeOffset}
        
      />
    </div>
    )
  }
}


export default DrawingPad