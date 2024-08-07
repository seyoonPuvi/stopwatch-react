// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeElapsedInseconds: 0}

  update = () => {
    this.setState(prevState => ({
      timeElapsedInseconds: prevState.timeElapsedInseconds + 1,
    }))
  }

  onStart = () => {
    this.timerId = setInterval(this.update, 1000)
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({timeElapsedInseconds: 0})
  }

  getTime = () => {
    const {timeElapsedInseconds} = this.state
    const minutesCompletedBasedSeconds = Math.floor(timeElapsedInseconds / 60)
    const secondsCompleted = Math.floor(timeElapsedInseconds % 60)
    const hourCompleted = Math.floor(minutesCompletedBasedSeconds / 60)

    const minutesCompleted = Math.floor(minutesCompletedBasedSeconds % 60)

    const minutes =
      minutesCompleted < 10 ? `0${minutesCompleted}` : minutesCompleted
    const seconds =
      secondsCompleted < 10 ? `0${secondsCompleted}` : secondsCompleted

    let hours

    if (hourCompleted > 0 && hourCompleted < 10) {
      hours = `0${hourCompleted}:`
    } else if (hourCompleted > 9) {
      hours = `${hourCompleted}:`
    } else {
      hours = ''
    }

    return {minutes, seconds, hours}
  }

  render() {
    const time = this.getTime()
    const {minutes, seconds, hours} = time

    return (
      <div className="app-cont">
        <h1 className="title">StopWatch</h1>
        <div className="main-cont">
          <div className="logo-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <h1 className="logo-text">Timer</h1>
          </div>
          <h1 className="time">{`${hours}${minutes}:${seconds}`}</h1>
          <div className="btn-cont">
            <button
              type="button"
              className="btn btn-start"
              onClick={this.onStart}
            >
              Start
            </button>
            <button
              type="button"
              className="btn btn-stop"
              onClick={this.onStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="btn btn-reset"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
