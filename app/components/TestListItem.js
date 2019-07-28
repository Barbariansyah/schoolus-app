import React, { Component } from 'react'
import { ListItem, Text, Right, Left } from 'native-base'
import { withNavigation } from 'react-navigation'

class TestListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grade: this.props.grade,
      term: this.props.term,
      title: this.props.title,
      subject: this.props.subject,
      mark: this.props.mark
    }
  }

  render() {
    const { grade, term, title, subject, mark } = this.state

    return (
      <ListItem>
        <Left>
          <Text>{title}</Text>
        </Left>
        <Right style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{mark}</Text>
        </Right>
      </ListItem>
    )
  }
}

export default withNavigation(TestListItem)
