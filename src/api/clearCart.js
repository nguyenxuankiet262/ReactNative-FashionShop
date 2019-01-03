import { AsyncStorage } from "react-native"

const clearCart = async() => {
    try{
        await AsyncStorage.removeItem('@cart');
        return true;
    }
    catch(err){
        console.log(err);
    }
}

export default clearCart;