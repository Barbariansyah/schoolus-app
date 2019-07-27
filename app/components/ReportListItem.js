import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Right, Left, View } from 'native-base'
import { withNavigation } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

class ReportListItem extends Component {
  render () {
    return (
      <ListItem >
        <Left><Text>1st Midterm</Text></Left>
        <Right style={{ flexDirection: 'row', alignItems: 'center' }}><Text>77.2</Text><View style={{ paddingHorizontal: 10 }} ><FontAwesome name='chevron-right' /></View></Right>
      </ListItem>
    )
  }
}

export default withNavigation(ReportListItem)
