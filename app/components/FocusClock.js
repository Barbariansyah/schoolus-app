import React, { Component } from 'react'
import { Container, Header, Content, Button, Text, View, H1 } from 'native-base'
import { withNavigation } from 'react-navigation'

class FocusClock extends Component {
  render () {
    return (
      <H1 style={{ color: '#fff' }}>01:10:42</H1>
    )
  }
}

export default FocusClock
