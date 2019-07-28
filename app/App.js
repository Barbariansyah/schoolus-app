import React from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { StyleProvider } from 'native-base'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'
import AppNavigator from './navigation/navigation'

const httpLink = createHttpLink({
  uri: 'https://api.wirasuta.blog/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // TODO: change to local storage after login functionality
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDNiY2Y2YmFiYmY2MjJmZmQxNjA2MjkiLCJ1c2VyTmFtZSI6InRlc3Q0NTYiLCJpYXQiOjE1NjQyNDQ2MzMsImV4cCI6MTU2NjgzNjYzM30.JQLLVMghvRFCmwrs1A8EoiztfWypCPzqbCGF6cWVsDA'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    })
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <ApolloProvider client={client}>
        <StyleProvider style={getTheme(platform)}>
          <AppNavigator />
        </StyleProvider>
      </ApolloProvider>
    )
  }
}
