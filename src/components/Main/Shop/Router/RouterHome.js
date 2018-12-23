import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from '../Home/Home';
import ListProduct from '../Home/ListProduct';
import ProductDetail from '../Home/ProductDetail';

const HomeStack = createStackNavigator({
    HomeScreen: {
        screen: Home,
    },
    ListProductScreen: {
        screen: ListProduct
    },
    ProductDetailScreen:{
        screen: ProductDetail
    },
}, {
    headerMode: 'none'
});

export default createAppContainer(HomeStack);
