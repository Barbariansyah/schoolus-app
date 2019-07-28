import React from 'react'
import { Image, Text } from 'react-native'
import {
  Header,
  Content,
  Left,
  Body,
  Right,
  Title,
  H2,
  H3,
  Button,
  Icon
} from 'native-base'
import { Row, Grid } from 'react-native-easy-grid'
import { withNavigation } from 'react-navigation'
import { Query, graphql, compose } from 'react-apollo'

import withUserPurchase from '../lib/withUserPurchase'
import { GET_VOUCHER_DETAIL, PURCHASE_VOUCHER } from '../queries/voucher'
import Base from './template/Base'

class VoucherDetails extends React.Component {
  static navigationOptions = {
    header: null
  }

  purchaseVoucher = async ({ id, available, price }) => {
    //      Check for availibility and price
    try {
      await this.props.purchaseVoucher({
        variables: {
          user_id: this.props.user._id,
          voucher_id: id
        }
      })
      this.props.navigation.navigate('Purchased')
    } catch (err) {
      console.log(err)
      alert(err)
    }
  }

  render() {
    const { navigation } = this.props
    const id = navigation.getParam('id', null)

    return (
      <Base>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{ color: '#000' }} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Voucher Details</Title>
          </Body>
          <Right />
        </Header>
        <Query query={GET_VOUCHER_DETAIL} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading ...</Text>
            if (error) return <Text>Error! {error.message}</Text>

            const {
              available,
              desc,
              end_date,
              start_date,
              img_url,
              name,
              price,
              vendor
            } = data.voucherById

            return (
              <Content>
                <Grid>
                  <Row style={{ padding: 10 }}>
                    <Image
                      source={{ uri: img_url }}
                      style={{ height: 180, width: 150, flex: 1 }}
                    />
                  </Row>
                  <Row style={{ justifyContent: 'center', paddingTop: 10 }}>
                    <H2>{name}</H2>
                  </Row>
                  <Row style={{ justifyContent: 'center', paddingBottom: 5 }}>
                    <Text>
                      Valid for {new Date(start_date).toDateString()} -{' '}
                      {new Date(end_date).toDateString()}
                    </Text>
                  </Row>
                  <Row style={{ paddingVertical: 5 }}>
                    <H3>Highlights</H3>
                  </Row>
                  <Row>
                    <Text>{desc}</Text>
                  </Row>
                </Grid>
                <Row style={{ padding: 20, justifyContent: 'center' }}>
                  {available > 0 ? (
                    <Button
                      primary
                      style={{
                        justifyContent: 'center',
                        paddingHorizontal: 40
                      }}
                      onPress={() => {
                        this.purchaseVoucher({ id, available, price })
                      }}
                    >
                      <Text style={{ color: 'white' }}> Purchase Voucher </Text>
                    </Button>
                  ) : (
                    <Button
                      disabled
                      style={{
                        justifyContent: 'center',
                        paddingHorizontal: 40
                      }}
                    >
                      <Text style={{ color: 'white' }}> Out of Stock </Text>
                    </Button>
                  )}
                </Row>
              </Content>
            )
          }}
        </Query>
      </Base>
    )
  }
}

export default compose(
  withUserPurchase,
  withNavigation,
  graphql(PURCHASE_VOUCHER, { name: 'purchaseVoucher' })
)(VoucherDetails)
