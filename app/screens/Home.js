import React from 'react'
import { Image } from 'react-native'
import {
  Header,
  Content,
  Left,
  Body,
  Right,
  Title,
  H1,
  Row,
  Grid
} from 'native-base'

import withUserPurchase from '../lib/withUserPurchase'
import Base from './template/Base'
import HomeCard from '../components/HomeCard'
import FocusButton from '../components/FocusButton'
import HomeList from '../components/HomeList'

class Home extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Base>
        <Header>
          <Left style={{ flex: 1 }} />
          <Body style={{ flex: 1, alignItems: 'center' }}>
            <Title>Home</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content>
          <Grid>
            <Row style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
              <HomeCard />
            </Row>
            <Row style={{ justifyContent: 'center' }}>
              <H1>Hello, Tude</H1>
            </Row>
            <Row>
              <Image
                source={require('../assets/home-girl.png')}
                style={{ height: 270, width: 150, flex: 1 }}
              />
            </Row>
            <Row style={{ paddingHorizontal: 80 }}>
              <FocusButton />
            </Row>
            <Row>
              <HomeList />
            </Row>
          </Grid>
        </Content>
      </Base>
    )
  }
}

export default withUserPurchase(Home)
