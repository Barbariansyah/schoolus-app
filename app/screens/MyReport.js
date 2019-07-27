import React from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import { Header, Content, Left, Body, Right, Title, H1 , Button, Icon} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { withNavigation } from 'react-navigation';

import Base from './template/Base'
import ReportList from '../components/ReportList'
import ReportChart from '../components/ReportChart'

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})

class MyReport extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Base>
        <Header>
          <Left style={{flex: 1}}>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon style={{color: '#000'}} name='arrow-back' />
              </Button>
          </Left>
          <Body style={{flex: 2, alignItems:'center'}}>
            <Title>My Report Card</Title>
          </Body>
          <Right style={{flex: 1}}></Right>
        </Header>
        <Content>
            <ReportChart/>
         <Grid>
            <Row>
            </Row>
            <Row>
                <ReportList/>
            </Row>
          </Grid>
        </Content>
      </Base>
    )
  }
}

export default withNavigation(MyReport)
