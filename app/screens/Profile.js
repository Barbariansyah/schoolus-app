import React from 'react'
import { Header, Content, Text, Left, Body, Right, Title } from 'native-base'

import Base from './template/Base'

class Profile extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Base>
        <Header>
          <Left />
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Hello Bois</Text>
        </Content>
      </Base>
    )
  }
}

export default Profile
