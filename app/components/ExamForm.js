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
  Input
} from 'native-base'

import GradePicker from './GradePicker'
import TermPicker from './TermPicker'

export default class ExamForm extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Form>
        <H2 style={{ textAlign: 'center', margin: 3 }}>Record an Exam</H2>
        <H3 style={{ margin: 10 }}>Term</H3>
        <Text note>Grade</Text>
        <GradePicker />
        <Text note>Term</Text>
        <TermPicker />
        <H3 style={{ margin: 10, marginBottom: 3 }}>Marks</H3>
        <Item floatingLabel style={{ paddingTop: 0 }}>
          <Label>Subject</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Title</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Marks</Label>
          <Input />
        </Item>
      </Form>
    )
  }
}
