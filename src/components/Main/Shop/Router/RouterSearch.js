import { createStackNavigator, createAppContainer } from "react-navigation";
import Search from '../Search/Search';
import ProductDetail from '../Home/ProductDetail';

const SearchStack = createStackNavigator({
    SearchScreen: {
        screen: Search,
    },
    ProductDetailScreen:{
        screen: ProductDetail
    },
}, {
    headerMode: 'none'
});

export default createAppContainer(SearchStack);
