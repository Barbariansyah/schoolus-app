import React from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import { Header, Content, Left, Body, Right, Title, H1, H2, H3, Button, Icon } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { withNavigation } from 'react-navigation';

import Base from './template/Base'

const styles = StyleSheet.create({
    container: {
      width: '100%'
    }
  })
  
class PurchasedScreen extends React.Component {
    static navigationOptions = {
     header: null
    }

    render() {
      return(
        <Base>
          <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{ color: '#000' }} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Purchase Successful</Title>
          </Body>
          <Right />
        </Header>
        <Grid>
          <Row>
            <H1>You've successfuly purchased a voucher</H1>
          </Row>
        </Grid>
        </Base>
      )
        
    }
  }