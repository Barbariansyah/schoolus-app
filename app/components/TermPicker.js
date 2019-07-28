import React, { Component } from 'react'
import { Picker, Icon } from 'native-base'

export default class PickerWithIcon extends Component {
  render() {
    const { term, setTerm } = this.props

    return (
      <Picker
        mode='dropdown'
        iosHeader='Term'
        iosIcon={<Icon name='arrow-down' />}
        style={{ width: undefined }}
        selectedValue={term}
        onValueChange={value => setTerm(value)}
      >
        <Picker.Item label='1st Midterm' value='1st Midterm' />
        <Picker.Item label='1st Final' value='1st Final' />
        <Picker.Item label='2nd Midterm' value='2nd Midterm' />
        <Picker.Item label='2nd Final' value='2nd Final' />
      </Picker>
    )
  }
}
