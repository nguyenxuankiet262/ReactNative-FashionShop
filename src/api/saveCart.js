import { AsyncStorage } from "react-native"

const saveCart = async (cartArray) => {
    try {
        await AsyncStorage.setItem('@cart', JSON.stringify(cartArray));
    } catch (error) {
        // Error saving data
    }
}

export default saveCart;