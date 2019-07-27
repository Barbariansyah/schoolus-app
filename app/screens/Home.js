import React from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import { Header, Content, Left, Body, Right, Title, H1, View } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { withNavigation } from 'react-navigation';

import Base from './template/Base'
import HomeCard from '../components/HomeCard'
import FocusButton from '../components/FocusButton'
import HomeList from '../components/HomeList'


const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})

class Home extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Base>
        <Header>
          <Left style={{flex: 1}}></Left>
          <Body style={{flex: 1, alignItems:'center'}}>
            <Title>Home</Title>
          </Body>
          <Right style={{flex: 1}}></Right>
        </Header>
        <Content>
         <Grid>
            <Row style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <HomeCard/>
            </Row>
            <Row style={{justifyContent:'center'}}>
              <H1>Good Evening, Tude</H1>
            </Row>
            <Row>
              <Image source={require('../assets/home-girl.png')} style={{height: 270, width:150, flex: 1}}/> 
            </Row>
            <Row style={{paddingHorizontal: 80}}>
              <FocusButton/>
            </Row>
            <Row>
              <HomeList/>
            </Row>
          </Grid>
        </Content>
      </Base>
    )
  }
}

export default Home
