import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Content, Left, Body, Right, Title } from 'native-base'

import Base from './template/Base'
import Cardlist from '../components/Cardlist'

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
          <Cardlist />
        </Content>
      </Base>
    )
  }
}

export default Home
