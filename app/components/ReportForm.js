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
  Grid,
  Column,
  Form,
  H2,
  H3,
  Text,
  Item,
  Label,
  Input,
  View
} from 'native-base'

import GradePicker from './GradePicker'
import TermPicker from './TermPicker'
import ReportMark from './ReportMark'

export default class ReportForm extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{ backgroundColor: 'transparent' }}>
        <Form style={{ paddingBottom: 15 }}>
          <H2 style={{ textAlign: 'center', margin: 3 }}>
            Record a Report Card
          </H2>
          <H3 style={{ margin: 10 }}>Term</H3>
          <Text note>Grade</Text>
          <GradePicker />
          <Text note>Term</Text>
          <TermPicker />
          <H3 style={{ margin: 10 }}>Marks</H3>
          <ReportMark />
        </Form>
      </View>
    )
  }
}
