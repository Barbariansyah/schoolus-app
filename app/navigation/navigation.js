import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
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
import PurchasedScreen from '../screens/PurchasedScreen'
import RecordCamera from '../screens/RecordCamera'
import RecordForm from '../screens/RecordForm'
import AuthLoadScreen from '../screens/AuthLoad'
import LoginScreen from '../screens/Login'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    FocusMode: FocusModeScreen,
    MyReport: MyReportScreen,
    MyExams: MyExamsScreen,
    MyQuizes: MyQuizesScreen,
    RecordCamera: RecordCamera,
    RecordForm: RecordForm
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarVisible:
        navigation.state.routes[navigation.state.index].routeName !==
          'FocusMode' &&
        navigation.state.routes[navigation.state.index].routeName !==
          'RecordCamera'
    })
  }
)

const VoucherStack = createStackNavigator({
  Coupon: CouponScreen,
  VoucherDetails: VoucherDetailsScreen,
  Purchased: PurchasedScreen
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

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoad: AuthLoadScreen,
      App: AppNavigator,
      Auth: LoginScreen
    },
    {
      initialRouteName: 'AuthLoad'
    }
  )
)
