import React, { Component } from 'react'
import { AsyncStorage, Image, View } from 'react-native'
import { Content, Button, Text, Item, Label, Input, Form } from 'native-base'

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
      <Content style={{ backgroundColor: '#007aff' }}>
        <View
          style={{
            alignItems: 'center',
            alignContent: 'center',
            paddingTop: 80,
            paddingBottom: 40
          }}
        >
          <Image
            source={require('../assets/login.jpg')}
            style={{ height: 170, width: 200 }}
          />
        </View>
        <Form style={{ flex: 1, margin: 20 }}>
          <Item
            rounded
            style={{
              backgroundColor: '#fff',
              marginVertical: 5,
              paddingHorizontal: 10
            }}
          >
            <Input placeholder='Username' />
          </Item>
          <Item
            rounded
            style={{
              backgroundColor: '#fff',
              marginVertical: 5,
              paddingHorizontal: 10
            }}
          >
            <Input secureTextEntry={true} placeholder='Password' />
          </Item>
          <Button
            primary
            onPress={this.signIn}
            style={{
              justifyContent: 'center',
              marginVertical: 20,
              backgroundColor: '#fff'
            }}
          >
            <Text style={{ color: '#007aff' }}>Sign In</Text>
          </Button>
        </Form>
      </Content>
    )
  }
}
