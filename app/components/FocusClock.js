import React, { Component } from 'react'
import { H1 } from 'native-base'

class FocusClock extends Component {
  state = {
    curTime: new Date(),
    startTime: new Date(),
    interval: null
  }

  toHHMMSS = second => {
    var sec_num = parseInt(second, 10) // don't forget the second param
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor((sec_num - hours * 3600) / 60)
    var seconds = sec_num - hours * 3600 - minutes * 60

    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    return hours + ':' + minutes + ':' + seconds
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({
        curTime: new Date()
      })
    }, 1000)
    this.setState({ interval })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  render() {
    var timer = (this.state.curTime - this.state.startTime) / 1000
    return <H1 style={{ color: '#fff' }}>{this.toHHMMSS(timer)}</H1>
  }
}

export default FocusClock
