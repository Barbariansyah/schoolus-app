import React, { Component } from 'react'
import { Content, List, ListItem, Text } from 'native-base'
import { withNavigation } from 'react-navigation'

import ReportListItem from './ReportListItem'

class ReportList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grade: this.props.grade
    }
  }

  render() {
    const { grade } = this.state

    return (
      <Content>
        <List>
          <ListItem itemHeader style={{ paddingBottom: 5 }}>
            <Text>{grade}th grade</Text>
          </ListItem>
          <ReportListItem grade='11' term='1st Midterm' avg='72.4' />
        </List>
      </Content>
    )
  }
}

export default withNavigation(ReportList)
