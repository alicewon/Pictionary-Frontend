import React from 'react'
import ReactDOM from "react-dom"
import CanvasDraw from "react-canvas-draw"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
ReactDOM.render(<CanvasDraw />, document.getElementById("root"));


// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }))


class DrawingArea extends React.Component {
  // classes = useStyles();

  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 10,
    lazyRadius: 12
  }


  
  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      });
    }, 2000);
    }

  
  render = () => {
    
    return(
      <div>
      <h1>DRAW SOMETHING:</h1>
     
      <CanvasDraw
        className="canvasbox"
        hideInterface hideGrid 
        ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
        brushColor={this.state.color}
        brushRadius={this.state.brushRadius}
        lazyRadius={this.state.lazyRadius}
        canvasWidth={this.state.width}
        canvasHeight={this.state.height}
      />
       <Container maxWidth="sm">
         <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          onClick={() => {
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


export default DrawingArea