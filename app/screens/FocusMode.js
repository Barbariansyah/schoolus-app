import React from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import { Header, Content, Left, Body, Right, Title, H1 } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';

import Base from './template/Base'
import HomeCard from '../components/HomeCard'
import FocusButton from '../components/FocusButton'
import HomeList from '../components/HomeList'
import FocusModeButton from '../components/FocusModeButton';
import FocusClock from '../components/FocusClock';


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
      <>
        <Header style={{ backgroundColor: '#007aff' }}>
          <Left />
          <Body>
            <Title></Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ backgroundColor: '#007aff' }}>
         <Grid>
            <Row>
              <Image source={require('../assets/focusMode.png')} style={{height: 350, width: 100, flex: 1}}/>
            </Row>
            <Row style={{justifyContent: 'center', paddingHorizontal:50, paddingTop:10}}>
                <Text style={{textAlign: 'center', color:'#fff'}}>Focus Mode is on.{"\n"}Throughout this mode you{"\n"} can only open apps on your {"\n"}productive list</Text>
            </Row>
            <Row style={{justifyContent: 'center', paddingVertical:20}}>
                <FocusClock />
            </Row>
            <Row>
                <FocusModeButton/>
            </Row>
          </Grid>
        </Content>
      </>
    )
  }
}

export default Home
