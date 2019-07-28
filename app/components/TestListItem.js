import React, { Component } from 'react'
import { ListItem, Text, Right, Left } from 'native-base'
import { withNavigation } from 'react-navigation'

class TestListItem extends Component {
  render () {
    return (
      <ListItem>
        <Left>
          <Text>Ujian Harian 1</Text>
        </Left>
        <Right style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>87.2</Text>
        </Right>
      </ListItem>
    )
  }
}

export default withNavigation(TestListItem)
