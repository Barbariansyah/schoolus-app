import React, { Component } from 'react'
import {
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Right,
  H1
} from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'
import { compose } from 'react-apollo'

import withUserPurchase from '../lib/withUserPurchase'

class HomeCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      points: this.props.user.points
    }
  }

  render() {
    const { points } = this.state

    return (
      <Content>
        <Card>
          <CardItem style={{ paddingTop: 20, alignItems: 'center' }}>
            <Left>
              <Body>
                <Text>Schoolus {'\n'}Points</Text>
              </Body>
            </Left>
            <Right>
              <Body>
                <H1>{points} pts</H1>
              </Body>
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('RecordCamera')}
              >
                <FontAwesome active name='plus' />
                <Text>New {'\n'}Record</Text>
              </Button>
            </Left>
            <Right>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate('Coupon')}
              >
                <FontAwesome active name='ticket' />
                <Text>See {'\n'}Vouchers</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    )
  }
}

export default compose(
  withUserPurchase,
  withNavigation
)(HomeCard)
