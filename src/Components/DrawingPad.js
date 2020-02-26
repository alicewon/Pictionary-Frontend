import React from 'react'
import ReactDOM from "react-dom"
import CanvasDraw from "react-canvas-draw"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
ReactDOM.render(<CanvasDraw />, document.getElementById("root"));

//Monday To Do List:

// function that sends/streams(?) message to drawings_channel from this component:

// use onChange in CanvasDraw component to get the localstorage saved data of the drawing on each mouseUp
// --> onChange={() => saved_drawing = this.saveableCanvas.getSaveData()}

// within same onChange, take localstorage's data and pass it as the message being sent to be streamed in the drawings_channel
// --> (onChange gives new version of the drawing with updated mouse clicks ) 
// -->  onChange={() => saved_drawing = this.saveableCanvas.getSaveData() 
//        sendToChannel(saved_drawing)
//             


//second user: 

// create two user views? do i need auth for this? Can i just say, if 1 person is already connected to server, then they are considered player#2 and have the watch view? (not able to draw, and only receiving messages)

//chat will stay true to real-time chat messages

//will chat be in a different channel? needs to render on same page as drawing



class DrawingPad extends React.Component {

  state = {
    color: "#000",
    width: 400,
    height: 400,
    brushRadius: 10,
    lazyRadius: 12
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
        // console.log(data)
        this.loadableCanvas.loadSaveData(
          data.drawing_data
        );
        //a callback function that is called once everytime the server sends realtime data to Consumer
      },
  })

    return(
      <div>
      <h2>DRAW SOMETHING:</h2>
     
      <CanvasDraw
        className="canvasbox"
        hideInterface hideGrid 
        ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
        brushColor={this.state.color}
        brushRadius={this.state.brushRadius}
        lazyRadius={this.state.lazyRadius}
        canvasWidth={this.state.width}
        canvasHeight={this.state.height}
        // onChange={() => console.log(this.saveableCanvas.getSaveData())} //json
        // // this will send the updated drawing save data, each time it is updated, to the web socket server.
        // onChange={() => this.props.CableApp.drawingsChannel.send(this.saveableCanvas.getSaveData())}
        onChange={() => this.props.CableApp.drawingsChannel.send({"drawing_data": this.saveableCanvas.getSaveData()})}
      />

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
      <h2>watch your drawing:</h2>

      
      {/* bottom canvas will always be listening to drawings channel  */}
      {/* need to replace local storage with call to server */}
      <CanvasDraw
        className="canvasbox"
        disabled
        hideGrid
        ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
        saveData={localStorage.getItem("savedDrawing")}
        
      />


        <Container maxWidth="sm">
         <ButtonGroup color="primary" aria-label="outlined primary button group">
        
        
        <Button
          onClick={() => {
            this.loadableCanvas.loadSaveData(
              localStorage.getItem("savedDrawing")
            );
          }}
        >
          Playback Drawing
        </Button>


        <Button
          onClick={() => {
            this.loadableCanvas.clear();
          }}
        >
          Clear
        </Button>
        
        </ButtonGroup>
        </Container>




    </div>
    )
  }
}


export default DrawingPad