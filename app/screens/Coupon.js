import React from 'react'
import { Header, Content, Text, Left, Body, Right, Title, Segment } from 'native-base'

import Base from './template/Base'
import Segments from '../components/Segments'
import Cardlist from '../components/Cardlist'

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
          <Segments />
        </Content>
      </Base>
    )
  }
}

export default Coupon
