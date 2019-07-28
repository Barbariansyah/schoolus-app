import React from 'react'
import {
  Header,
  Content,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon
} from 'native-base'
import { Row, Grid } from 'react-native-easy-grid'
import { withNavigation } from 'react-navigation'

import Base from './template/Base'
import TestList from '../components/TestList'

class MyReport extends React.Component {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <Base>
        <Header>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{ color: '#000' }} name='arrow-back' />
            </Button>
          </Left>
          <Body style={{ flex: 1, alignItems: 'center' }}>
            <Title>My Exams</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content>
          <Grid>
            <Row>
              <TestList />
            </Row>
          </Grid>
        </Content>
      </Base>
    )
  }
}

export default withNavigation(MyReport)
