import React, { Component } from 'react'
import { Content, List, ListItem, Text, Left, Right } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
export default class ListExample extends Component {
  render () {
    const {
      fullname,
      username,
      school,
      grade,
      phone,
      email
    } = this.props.context

    return (
      <Content>
        <List>
          <ListItem>
            <Left>
              <Text>Full Name</Text>
            </Left>
            <Text>{fullname}</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Userame</Text>
            </Left>
            <Text>{username}</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>School</Text>
            </Left>
            <Text>{school}</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Grade</Text>
            </Left>
            <Text>{grade}</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Phone</Text>
            </Left>
            <Text>{phone || 'Not set up'}</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Email</Text>
            </Left>
            <Text>{email || 'Not set up'}</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Password</Text>
            </Left>
            <Text>*****</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Terms and Conditons</Text>
            </Left>
            <Right>
              <FontAwesome name='chevron-right' />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Privacy Policy</Text>
            </Left>
            <Right>
              <FontAwesome name='chevron-right' />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>About</Text>
            </Left>
            <Right>
              <FontAwesome name='chevron-right' />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={{ color: 'red' }}>Log Out</Text>
            </Left>
          </ListItem>
        </List>
      </Content>
    )
  }
}
