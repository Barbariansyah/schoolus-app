import React from 'react'
import { Image } from 'react-native'
import { Content, Text } from 'native-base'
import { Row, Grid } from 'react-native-easy-grid'

import FocusModeButton from '../components/FocusModeButton'
import FocusClock from '../components/FocusClock'

class Home extends React.Component {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <Content style={{ backgroundColor: '#007aff' }}>
        <Grid>
          <Row>
            <Image
              source={require('../assets/focusMode.png')}
              style={{ height: 350, width: 100, flex: 1 }}
            />
          </Row>
          <Row
            style={{
              justifyContent: 'center',
              paddingHorizontal: 50,
              paddingTop: 10
            }}
          >
            <Text style={{ textAlign: 'center', color: '#fff' }}>
              Focus Mode is on.{'\n'}Throughout this mode you{'\n'} can only
              open apps on your {'\n'}productive list
            </Text>
          </Row>
          <Row style={{ justifyContent: 'center', paddingVertical: 20 }}>
            <FocusClock />
          </Row>
          <Row>
            <FocusModeButton />
          </Row>
        </Grid>
      </Content>
    )
  }
}

export default Home
