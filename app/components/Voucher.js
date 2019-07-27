import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import { withNavigation } from 'react-navigation'

class Voucher extends Component {
  constructor (props) {
    super(props)
    this.state = {
      voucherImgUri: null,
      title: null,
      provider: null
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        voucherImgUri: this.props.imgUri,
        title: this.props.title,
        provider: this.props.provider
      })
    }, Math.random() * 1000)
  }

  render () {
    const { voucherImgUri, title, provider } = this.state

    return (
      <Card>
        <CardItem cardBody button onPress={() => this.props.navigation.navigate('VoucherDetails')}>
          <Image source={{ uri: voucherImgUri }} style={{ height: 150, width: '100%', flex: 1 }} />
        </CardItem>
        <CardItem button onPress={() => alert('Go to details')}>
          <Left>
            <Body>
              <Text>{title}</Text>
              <Text note>{provider}</Text>
            </Body>
          </Left>
          <Right>
            <Text>5 Pts</Text>
          </Right>
        </CardItem>
      </Card>
    )
  }
}

export default withNavigation(Voucher)
