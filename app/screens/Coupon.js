import React from 'react'
import { Header, Content, Text, Left, Body, Right, Title } from 'native-base'

import Base from './template/Base'

class Coupon extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Base>
        <Header>
          <Left />
          <Body>
            <Title>Coupon</Title>
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

export default Coupon
