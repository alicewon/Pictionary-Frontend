import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'semantic-ui-react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { seconds: 0 };
    this.startTimer = this.startTimer.bind(this)
  }
  state= {
    minutes: 3,
    seconds: 0
  }

  startTimer() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    const { minutes, seconds } = this.state
    return(
        <div>
          { minutes === 0 && seconds === 0 
          ? <h1 className="timer over">Times up!</h1>
          :
          <h1 className="timer">{ minutes }:{ seconds < 10 ? `0${ seconds }` : seconds }</h1>
          }
          <Button
            onClick={this.startTimer}
          >Start Drawing</Button>
        </div>
      
    )
  }
}

export default Timer