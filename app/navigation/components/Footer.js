import React from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'
import { withNavigation } from 'react-navigation'

const BottomNavbar = ({ navigation }) => {
  const route = navigation.state.routeName

  return (
    <Footer>
      <FooterTab>
        <Button
          vertical
          active={route === 'Home'}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name='home' />
          <Text>Home</Text>
        </Button>
        <Button
          vertical
          active={route === 'Coupon'}
          onPress={() => navigation.navigate('Coupon')}
        >
          <Icon active name='navigate' />
          <Text>Coupon</Text>
        </Button>
        <Button
          vertical
          active={route === 'Profile'}
          onPress={() => navigation.navigate('Profile')}
        >
          <Icon name='person' />
          <Text>Profile</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
}

export default withNavigation(BottomNavbar)
