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
  View,
  Button
} from 'native-base'

export default class ReportMark extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      rows: []
    }
  }

  _addRow = () => {
    this.setState({ rows: [...this.state.rows, this.state.rows.length] })
  }

  render() {
    let rows = this.state.rows.map((r, i) => {
      return (
        <View
          key={i}
          style={{ alignItems: 'center', flexDirection: 'row', paddingTop: 5 }}
        >
          <Item floatingLabel style={{ flex: 1 }}>
            <Label>Subject</Label>
            <Input />
          </Item>
          <Item floatingLabel style={{ flex: 1 }}>
            <Label>Average</Label>
            <Input />
          </Item>
        </View>
      )
    })

    return (
      <View>
        {rows}
        <Button onPress={this._addRow}>
          <Text>Add Row</Text>
        </Button>
      </View>
    )
  }
}
