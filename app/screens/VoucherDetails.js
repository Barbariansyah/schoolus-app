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
  
  class VoucherDetails extends React.Component {
    static navigationOptions = {
      header: null
    }
  
    render() {
      return (
        <Base>
          <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{color: '#000'}} name='arrow-back' />
            </Button>
          </Left>
            <Body>
              <Title>Voucher Details</Title>
            </Body>
            <Right />
          </Header>
          <Content>
           <Grid>
              <Row style={{padding: 10}}>
                <Image source={require('../assets/voucher1.jpg')} style={{height: 180, width: 150, flex: 1}}/>
              </Row>
              <Row style={{justifyContent:'center', paddingTop: 10}}>
                <H2>One Week Access</H2>
              </Row>
              <Row style={{justifyContent:'center', paddingBottom: 5}}><Text>Valid for dd mm yyyy - dd mm yyyy</Text></Row>
              <Row style={{paddingVertical: 5}}><H3>Highlights</H3></Row>
              <Row><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                  in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </Row>
              <Row style={{paddingVertical: 5}}><H3>Terms and Conditions</H3></Row>
              <Row><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                 nisi ut aliquip ex ea commodo consequat.</Text>
              </Row>
            </Grid>
            <Row style={{padding:20, justifyContent:'center'}}>
            <Button style={{justifyContent:'center', paddingHorizontal: 40 }} primary><Text> Purchase Voucher </Text></Button>
            </Row>
          </Content>
        </Base>
      )
    }
  }
  
  export default withNavigation(VoucherDetails) 
  