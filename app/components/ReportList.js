import React, { Component } from 'react'
import { Content, List, ListItem, Text } from 'native-base'
import { withNavigation } from 'react-navigation'

import ReportListItem from './ReportListItem'

class ReportList extends Component {
  render () {
    return (
      <Content>
        <List>
          <ListItem itemHeader style={{ paddingBottom: 5 }}>
            <Text>11th Grade</Text>
          </ListItem>
          <ReportListItem />
        </List>
      </Content>
    )
  }
}

export default withNavigation(ReportList)
