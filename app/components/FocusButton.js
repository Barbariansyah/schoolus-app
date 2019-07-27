import React, { Component } from 'react'
import { Container, Header, Content, Button, Text, View } from 'native-base'
import { withNavigation } from 'react-navigation'

class FocsuButton extends Component {
  render () {
    return (
      <Content style={{ paddingVertical: 10 }}>
        <Button primary onPress={() => this.props.navigation.navigate('FocusMode')} style={{ justifyContent: 'center', borderRadius: 4 }}>
          <Text> Focus Mode </Text>
        </Button>
      </Content>
    )
  }
}

export default withNavigation(FocsuButton)
