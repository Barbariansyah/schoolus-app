import React, { Component } from 'react'
import { AsyncStorage, Image, View } from 'react-native'
import { Button, Text } from 'native-base'

import Base from './template/Base'

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  signIn = async () => {
    await AsyncStorage.setItem(
      'userToken',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDNiY2Y2YmFiYmY2MjJmZmQxNjA2MjkiLCJ1c2VyTmFtZSI6InRlc3Q0NTYiLCJpYXQiOjE1NjQyNDQ2MzMsImV4cCI6MTU2NjgzNjYzM30.JQLLVMghvRFCmwrs1A8EoiztfWypCPzqbCGF6cWVsDA'
    )
    await AsyncStorage.setItem('userId', '5d3bcf6babbf622ffd160629')
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <Base>
        <View style={{ backgroundColor: '#007AFF', flex: 1 }}>
          <Image
            source={require('../assets/login.jpg')}
            style={{ height: 100, width: 150, flex: 1 }}
          />

          <Button primary onPress={this.signIn}>
            <Text>Sign In!</Text>
          </Button>
        </View>
      </Base>
    )
  }
}
