import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Right, Left, View, H1, H2, H3 } from 'native-base'
import { withNavigation } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import TestListItem from './TestListItem'

class TestList extends Component {
  render () {
    return (
      <Content>
        <List>
          <ListItem itemHeader style={{ paddingBottom: 5 }}>
            <H2>11th Grade</H2>
          </ListItem>
          <ListItem itemHeader style={{ paddingBottom: 2 }}>
            <Text>1st Midterm</Text>
          </ListItem>
          <ListItem itemHeader style={{ paddingBottom: 2 }}>
            <H3>Math</H3>
          </ListItem>
          <TestListItem />
          <TestListItem />
          <TestListItem />
        </List>
      </Content>
    )
  }
}

export default withNavigation(TestList)
