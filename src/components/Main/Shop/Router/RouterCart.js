import { createStackNavigator, createAppContainer } from "react-navigation";
import Cart from '../Cart/Cart';
import ProductDetail from '../Home/ProductDetail';


const CartStack = createStackNavigator({
    CartScreen: {
        screen: Cart,
    },
    ProductDetailScreen:{
        screen: ProductDetail
    },
}, {
    headerMode: 'none'
});

export default createAppContainer(CartStack);
