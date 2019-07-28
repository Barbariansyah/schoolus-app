import React, { Component } from 'react'
import { Icon, Picker } from 'native-base'

export default class PickerWithIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '11th Grade'
    }
  }
  onValueChange(value) {
    this.setState({
      selected: value
    })
  }
  render() {
    return (
      <Picker
        mode='dropdown'
        iosHeader='Grade'
        iosIcon={<Icon name='arrow-down' />}
        style={{ width: undefined }}
        selectedValue={this.state.selected}
        onValueChange={this.onValueChange.bind(this)}
      >
        <Picker.Item label='7th Grade' value='7th Grade' />
        <Picker.Item label='8th Grade' value='8th Grade' />
        <Picker.Item label='9th Grade' value='9th Grade' />
        <Picker.Item label='10th Grade' value='10th Grade' />
        <Picker.Item label='11th Grade' value='11th Grade' />
        <Picker.Item label='12th Grade' value='12th Grade' />
      </Picker>
    )
  }
}
