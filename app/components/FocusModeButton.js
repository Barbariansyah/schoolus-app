import React, { Component } from 'react'
import { Content, Button, Text, View } from 'native-base'
import { withNavigation } from 'react-navigation'

class FocsuModeButton extends Component {
  render () {
    return (
      <Content>
        <View style={{ paddingVertical: 5, paddingHorizontal: 30 }}>
          <Button
            light
            style={{ justifyContent: 'center' }}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text> Productive List </Text>
          </Button>
        </View>

        <View style={{ paddingVertical: 5, paddingHorizontal: 30 }}>
          <Button
            danger
            style={{ justifyContent: 'center' }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text> Quit </Text>
          </Button>
        </View>
      </Content>
    )
  }
}

export default withNavigation(FocsuModeButton)
