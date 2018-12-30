import { createStackNavigator, createAppContainer } from "react-navigation";
import Authentication from '../Authentication/Authentication'
import ChangeInfo from '../ChangeInfo/ChangeInfo'
import OrderHistory from '../OrderHistory/OrderHistory'
import Main from '../Main/Main'

const MenuStack = createStackNavigator({
    MainScreen: {
        screen: Main,
    },
    AuthenticationScreen: {
        screen: Authentication
    },
    ChangeInfoScreen:{
        screen: ChangeInfo
    },
    OrderHistoryScreen:{
        screen: OrderHistory
    }
}, {
    headerMode: 'none',
});

export default createAppContainer(MenuStack);
