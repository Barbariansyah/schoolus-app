import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'

export default class ProfileCard extends Component {
  constructor (props) {
    super(props)
      this.state = {
        profileImgUri: null,
        profileImgUri: this.props.imgUri,
        username: this.props.username,
        grade: this.props.grade,
        school: this.props.school,
    }
  }  

  render () {
    const { profileImgUri, username, grade, school } = this.state
    turn (
      <Content style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}>
        <Card style={{ borderRadius: 12 }} >
          <CardItem style={{ backgroundColor: '#007aff', borderRadius: 12 }}>
            <Left>
              <Thumbnail source={{ uri: profileImgUri }} />
              <Body>
                <Text style={{ color: '#fff' }} >Tude</Text>
                <Text style={{ color: '#fff' }}> 12th Grade </Text>
                <Text style={{ color: '#fff' }}> Labschool </Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
