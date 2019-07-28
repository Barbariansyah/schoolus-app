import React from 'react'
import { Image } from 'react-native'
import {
  Header,
  Content,
  Left,
  Body,
  Right,
  Title,
  Text,
  H1,
  Row,
  Grid,
  Button,
  Icon
} from 'native-base'
import { withNavigation } from 'react-navigation'
import Base from './template/Base'

import RecordSegments from '../components/RecordSegments'

class RecordForm extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigation } = this.props
    const { uri, base64 } = navigation.getParam('photo', null)

    console.log(navigation.getParam('photo', null))

    return (
      <Base>
        <Header>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{ color: '#000' }} name='arrow-back' />
            </Button>
          </Left>
          <Body style={{ flex: 2, alignItems: 'center' }}>
            <Title>New Record</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content>
          <Grid>
            <Row>
              <Image
                source={{ uri: uri }}
                style={{ height: 270, width: 150, flex: 1 }}
              />
            </Row>
            <Row>
              <RecordSegments />
            </Row>
          </Grid>
        </Content>
      </Base>
    )
  }
}

export default withNavigation(RecordForm)
