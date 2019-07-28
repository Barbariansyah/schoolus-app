import React from 'react'
import { Header, Content, Left, Body, Right, Title, Text } from 'native-base'
import { Query } from 'react-apollo'

import { GET_COMPLETE_USER } from '../queries/user'
import Base from './template/Base'
import ProfileList from '../components/ProfileList'
import ProfileCard from '../components/ProfileCard'

class Profile extends React.Component {
  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <Base>
        <Header>
          <Left style={{ flex: 1 }} />
          <Body style={{ flex: 1, alignItems: 'center' }}>
            <Title>Profile</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Query
          query={GET_COMPLETE_USER}
          variables={{ id: '5d3bcf6babbf622ffd160629' }}
        >
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading ...</Text>
            if (error) return <Text>Error! {error.message}</Text>

            console.log(data)

            const {
              email,
              full_name,
              grade,
              phone,
              school,
              user_name
            } = data.userById
            return (
              <Content>
                <ProfileCard
                  imgUri='https://source.unsplash.com/random/200x400'
                  username={user_name}
                  grade={grade}
                  school={school}
                />
                <ProfileList
                  context={{
                    fullname: full_name,
                    username: user_name,
                    school: school,
                    grade: grade,
                    phone: phone,
                    email: email
                  }}
                />
              </Content>
            )
          }}
        </Query>
      </Base>
    )
  }
}

export default Profile
