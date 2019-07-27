import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '../screens/Home'
import CouponScreen from '../screens/Coupon'
import ProfileScreen from '../screens/Profile'
import VoucherDetailsScreen from '../screens/VoucherDetails'
import FocusModeScreen from '../screens/FocusMode'
import MyReportScreen from '../screens/MyReport'
import MyExamsScreen from '../screens/MyExams'
import MyQuizesScreen from '../screens/MyQuizes'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Coupon: CouponScreen,
    Profile: ProfileScreen,
    VoucherDetails: VoucherDetailsScreen,
    FocusMode: FocusModeScreen,
    MyReport: MyReportScreen,
    MyExams: MyExamsScreen,
    MyQuizes: MyQuizesScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)
