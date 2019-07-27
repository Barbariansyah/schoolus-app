import React from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import { Header, Content, Left, Body, Right, Title } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';

import Base from './template/Base'
import HomeCard from '../components/HomeCard'


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
          <Left />
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
         <Grid>
            <Row>
              <HomeCard/>
            </Row>
            <Row style={{justifyContent:'center'}}>
              <Text>Good Evening, Tude</Text>
            </Row>
            <Row>
              <Image source={require('../assets/home-girl.png')} style={{height: 300, width: 150, flex: 1}}/> 
            </Row>
          </Grid>
        </Content>
      </Base>
    )
  }
}

export default Home
