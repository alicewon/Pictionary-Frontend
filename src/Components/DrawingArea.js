import React from 'react'
import ReactDOM from "react-dom"
import CanvasDraw from "react-canvas-draw"
ReactDOM.render(<CanvasDraw />, document.getElementById("root"));

class DrawingArea extends React.Component {
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
      <h1>This is the Drawing Area</h1>
     
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
       <div >
        <button
          onClick={() => {
            localStorage.setItem(
              "savedDrawing",
              this.saveableCanvas.getSaveData()
            );
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            this.saveableCanvas.clear();
          }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            this.saveableCanvas.undo();
          }}
        >
          Undo
        </button>
      </div>
      <h2>Saved Drawing:</h2>
      <button
        onClick={() => {
          this.loadableCanvas.loadSaveData(
            localStorage.getItem("savedDrawing")
          );
        }}
      >
        Playback Drawing
      </button>
      <CanvasDraw
        className="canvasbox"
        disabled
        hideGrid
        ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
        saveData={localStorage.getItem("savedDrawing")}
      />
    </div>
    )
  }
}


export default DrawingArea