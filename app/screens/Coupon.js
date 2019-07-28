import React from 'react'
import { Header, Content, Left, Body, Right, Title } from 'native-base'

import Base from './template/Base'
import Segments from '../components/Segments'

class Coupon extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Base>
        <Header>
          <Left style={{ flex: 1 }} />
          <Body style={{ flex: 1, alignItems: 'center' }}>
            <Title>Voucher</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content>
          <Segments />
        </Content>
      </Base>
    )
  }
}

export default Coupon
