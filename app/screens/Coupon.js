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
        <Left style={{flex: 1}}></Left>
          <Body style={{flex: 1, alignItems:'center'}}>
            <Title>Voucher</Title>
          </Body>
          <Right style={{flex: 1}}></Right>
        </Header>
        <Content>
          <Segments />
        </Content>
      </Base>
    )
  }
}

export default Coupon
