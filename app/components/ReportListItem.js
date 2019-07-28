import React, { Component } from 'react'
import { ListItem, Text, Right, Left, View } from 'native-base'
import { withNavigation } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

class ReportListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grade: this.props.grade,
      term: this.props.term,
      avg: this.props.avg
    }
  }

  render() {
    const { grade, term, avg } = this.state

    return (
      <ListItem>
        <Left>
          <Text>{term}</Text>
        </Left>
        <Right style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{avg}</Text>
          <View style={{ paddingHorizontal: 10 }}>
            <FontAwesome name='chevron-right' />
          </View>
        </Right>
      </ListItem>
    )
  }
}

export default withNavigation(ReportListItem)
