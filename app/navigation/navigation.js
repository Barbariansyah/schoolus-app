import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '../screens/Home'
import CouponScreen from '../screens/Coupon'
import ProfileScreen from '../screens/Profile'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Coupon: CouponScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)
