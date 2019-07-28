import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { Text } from 'native-base'
import { AsyncStorage } from 'react-native'

import { GET_SHOP_USER } from '../queries/user'

export default WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        userId: ''
      }
    }

    async componentDidMount() {
      const userId = await AsyncStorage.getItem('userId')
      this.setState({ userId })
    }

    render() {
      return (
        <Query query={GET_SHOP_USER} variables={{ id: this.state.userId }}>
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading ...</Text>
            if (error) return <Text>Error! {error.message}</Text>

            return <WrappedComponent user={data.userById} {...this.props} />
          }}
        </Query>
      )
    }
  }
}
