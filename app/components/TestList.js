import React, { Component } from 'react'
import { Content, List, ListItem, Text, H2, H3 } from 'native-base'
import { withNavigation } from 'react-navigation'

import TestListItem from './TestListItem'

class TestList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grade: this.props.grade,
      term: this.props.term,
      subject: this.props.subject
    }
  }

  render() {
    const { grade, term, subject } = this.state

    return (
      <Content>
        <List>
          <ListItem itemHeader style={{ paddingBottom: 5 }}>
            <H2>{grade}</H2>
          </ListItem>
          <ListItem itemHeader style={{ paddingBottom: 2 }}>
            <Text>{term}</Text>
          </ListItem>
          <ListItem itemHeader style={{ paddingBottom: 2 }}>
            <H3>{subject}</H3>
          </ListItem>
          <TestListItem
            grade='11'
            term='1st Midterm'
            title='Ujian Harian'
            subject='Math'
            mark='78.2'
          />
          <TestListItem
            grade='11'
            term='1st Midterm'
            title='Ujian Harian'
            subject='Math'
            mark='78.2'
          />
          <TestListItem
            grade='11'
            term='1st Midterm'
            title='Ujian Harian'
            subject='Math'
            mark='78.2'
          />
        </List>
      </Content>
    )
  }
}

export default withNavigation(TestList)
