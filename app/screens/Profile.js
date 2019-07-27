import React from 'react'
import { Header, Content, Text, Left, Body, Right, Title } from 'native-base'

import Base from './template/Base'
import ProfileList from '../components/ProfileList'
import ProfileCard from '../components/ProfileCard'

class Profile extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Base>
        <Header>
          <Left style={{flex: 1}}></Left>
          <Body style={{flex: 1, alignItems:'center'}}>
            <Title>Profile</Title>
          </Body>
          <Right style={{flex: 1}}></Right>
        </Header>
        <Content>
          <ProfileCard imgUri='https://source.unsplash.com/random/200x400' username='tude' grade='12th Grade' school='labschool' key='1'/>
          <ProfileList/>
        </Content>
      </Base>
    )
  }
}

export default Profile
