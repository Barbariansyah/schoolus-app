import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation'

import BottomNavbar from './components/Footer'
import HomeScreen from '../screens/Home'
import CouponScreen from '../screens/Coupon'
import ProfileScreen from '../screens/Profile'
import VoucherDetailsScreen from '../screens/VoucherDetails'
import FocusModeScreen from '../screens/FocusMode'
import MyReportScreen from '../screens/MyReport'
import MyExamsScreen from '../screens/MyExams'
import MyQuizesScreen from '../screens/MyQuizes'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    FocusMode: FocusModeScreen,
    MyReport: MyReportScreen,
    MyExams: MyExamsScreen,
    MyQuizes: MyQuizesScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarVisible:
        navigation.state.routes[navigation.state.index].routeName !==
        'FocusMode'
    })
  }
)

const VoucherStack = createStackNavigator({
  Coupon: CouponScreen,
  VoucherDetails: VoucherDetailsScreen
})

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Coupon: VoucherStack,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: BottomNavbar
  }
)

export default createAppContainer(AppNavigator)
