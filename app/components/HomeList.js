import React, { Component } from 'react'
import { Content, List, ListItem, Text, Right, Left } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'

class HomeList extends Component {
  render() {
    return (
      <>
        <Content>
          <List>
            <ListItem
              button
              onPress={() => this.props.navigation.navigate('MyReport')}
            >
              <Left>
                <Text>My Report Card</Text>
              </Left>
              <Right>
                <FontAwesome name='chevron-right' />
              </Right>
            </ListItem>
            <ListItem
              button
              onPress={() => this.props.navigation.navigate('MyExams')}
            >
              <Left>
                <Text>My Exams</Text>
              </Left>
              <Right>
                <FontAwesome name='chevron-right' />
              </Right>
            </ListItem>
          </List>
        </Content>
      </>
    )
  }
}

export default withNavigation(HomeList)
