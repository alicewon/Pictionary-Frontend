import React from 'react'
import DrawingArea from './DrawingArea'
const actioncable = require("actioncable")

class Drawing extends React.Component {
  state = {
    text: ''
  }
  
  componentDidMount() {
    this.cable = actioncable.createConsumer('ws://localhost:3000/cable')
    this.draw()
  }

  draw = () => {

    this.canvasChannel = this.cable.subscriptions.create({
      channel: `DrawingsChannel`
      // id: this.props.paramsId
  },{
      connected: () => {
          console.log("user has connected!")
      },
      disconnected: () => this.toggleConnection(),
      received: data => {}
 
  })
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  // handleSubmit = e => {

  // }

  render = () => {
    return(
      <div>
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
      </div>
    )
  }
}

export default Drawing