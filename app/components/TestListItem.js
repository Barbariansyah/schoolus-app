import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Right, Left, View } from 'native-base'
import { withNavigation } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

class TestListItem extends Component {
  render () {
    return (
      <ListItem >
        <Left><Text>Ujian Harian 1</Text></Left>
        <Right style={{ flexDirection: 'row', alignItems: 'center' }}><Text>87.2</Text></Right>
      </ListItem>
    )
  }
}

export default withNavigation(TestListItem)
