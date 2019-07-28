import React from 'react'
import { Text, Item, Label, Input, View, Button, Form } from 'native-base'

export default class ReportMark extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View>
        {this.props.rows.map((row, index) => (
          <View
            key={index}
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              paddingTop: 5
            }}
          >
            <Item floatingLabel style={{ flex: 1 }}>
              <Label>Subject</Label>
              <Input
                value={row.name}
                onChangeText={this.props.setRowName.bind(this, index)}
              />
            </Item>
            <Item floatingLabel style={{ flex: 1 }}>
              <Label>Average</Label>
              <Input
                value={row.value}
                onChangeText={this.props.setRowValue.bind(this, index)}
              />
            </Item>
          </View>
        ))}
        <Button onPress={this.props.addRow} style={{ margin: 10 }}>
          <Text>Add Row</Text>
        </Button>
      </View>
    )
  }
}
