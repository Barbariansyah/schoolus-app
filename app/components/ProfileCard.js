import React, { Component } from 'react'
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body
} from 'native-base'

export default class ProfileCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profileImgUri: this.props.imgUri,
      username: this.props.username,
      grade: this.props.grade,
      school: this.props.school
    }
  }

  render() {
    const { profileImgUri, username, grade, school } = this.state

    return (
      <Content style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}>
        <Card style={{ borderRadius: 12 }}>
          <CardItem style={{ backgroundColor: '#007aff', borderRadius: 12 }}>
            <Left>
              <Thumbnail source={{ uri: profileImgUri }} />
              <Body>
                <Text style={{ color: '#fff' }}>{username}</Text>
                <Text style={{ color: '#fff' }}>{grade}th Grade </Text>
                <Text style={{ color: '#fff' }}>{school}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    )
  }
}
