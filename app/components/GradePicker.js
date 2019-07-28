import React, { Component } from 'react'
import { Icon, Picker } from 'native-base'

export default class PickerWithIcon extends Component {
  render() {
    const { grade, setGrade } = this.props

    return (
      <Picker
        mode='dropdown'
        iosHeader='Grade'
        iosIcon={<Icon name='arrow-down' />}
        style={{ width: undefined }}
        selectedValue={grade}
        onValueChange={value => setGrade(value)}
      >
        <Picker.Item label='7th Grade' value={7} />
        <Picker.Item label='8th Grade' value={8} />
        <Picker.Item label='9th Grade' value={9} />
        <Picker.Item label='10th Grade' value={10} />
        <Picker.Item label='11th Grade' value={11} />
        <Picker.Item label='12th Grade' value={12} />
      </Picker>
    )
  }
}
