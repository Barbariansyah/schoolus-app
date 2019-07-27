import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Left, Right, Body } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
export default class ListExample extends Component {
  render () {
    return (
      <Content>
        <List>
          <ListItem>
            <Left>
              <Text>Full Name</Text>
            </Left>
            <Text>I Putu Gede</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Userame</Text>
            </Left>
            <Text>Tude</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>School</Text>
            </Left>
            <Text>Labschool</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Grade</Text>
            </Left>
            <Text>12</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Phone</Text>
            </Left>
            <Text>+6281220740745</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Email</Text>
            </Left>
            <Text>tude@gmail.com</Text>
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
