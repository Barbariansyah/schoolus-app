import React, { Component } from 'react'
import { Picker, Icon } from 'native-base'

export default class PickerWithIcon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: '1st Midterm'
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
        iosHeader='Term'
        iosIcon={<Icon name='arrow-down' />}
        style={{ width: undefined }}
        selectedValue={this.state.selected}
        onValueChange={this.onValueChange.bind(this)}
      >
        <Picker.Item label='1st Midterm' value='1st Midterm' />
        <Picker.Item label='1st Final' value='1st Final' />
        <Picker.Item label='2nd Midterm' value='2nd Midterm' />
        <Picker.Item label='2nd Final' value='2nd Final' />
      </Picker>
    )
  }
}
