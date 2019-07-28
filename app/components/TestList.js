import React, { Component } from 'react'
import { Content, List, ListItem, Text, H2, H3 } from 'native-base'
import { withNavigation } from 'react-navigation'

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
