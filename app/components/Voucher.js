import React, { Component } from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Text, Left, Body, Right } from 'native-base'
import { withNavigation } from 'react-navigation'

class Voucher extends Component {
  constructor(props) {
    super(props)
    this.state = {
      voucherImgUri: this.props.imgUri,
      title: this.props.title,
      provider: this.props.provider,
      price: this.props.price,
      id: this.props.id
    }
  }

  render() {
    const { id, voucherImgUri, title, provider, price } = this.state

    return (
      <Card>
        <CardItem
          cardBody
          button
          onPress={() =>
            this.props.navigation.navigate('VoucherDetails', { id })
          }
        >
          <Image
            source={{ uri: voucherImgUri }}
            style={{ height: 150, width: '100%', flex: 1 }}
          />
        </CardItem>
        <CardItem
          button
          onPress={() =>
            this.props.navigation.navigate('VoucherDetails', { id })
          }
        >
          <Left>
            <Body>
              <Text>{title}</Text>
              <Text note>{provider}</Text>
            </Body>
          </Left>
          <Right>
            <Text>{price} Pts</Text>
          </Right>
        </CardItem>
      </Card>
    )
  }
}

export default withNavigation(Voucher)
