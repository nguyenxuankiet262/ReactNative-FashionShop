import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, FlatList,
    Dimensions, StyleSheet, Image
} from 'react-native';

import sp1 from '../../.././../media/temp/sp1.jpeg';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            listCart: [
                { Name: 'Lace Sleeve Si', Price: '117' },
                { Name: 'Lace Sleeve Si', Price: '117' },
                { Name: 'Lace Sleeve Si', Price: '117' },
                { Name: 'Lace Sleeve Si', Price: '117' },
                { Name: 'Lace Sleeve Si', Price: '117' },
                { Name: 'Lace Sleeve Si', Price: '117' },
                { Name: 'Lace Sleeve Si', Price: '117' },
                { Name: 'Lace Sleeve Si', Price: '117' },
            ],
        }
    }

    renderItem = ({ item }) => {
        const { product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer } = styles;
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('ProductDetailScreen')
            }}>
                <View style={product}>
                    <Image source={sp1} style={productImage} />
                    <View style={[mainRight]}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={txtName}>{toTitleCase(item.Name)}</Text>
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={txtPrice}>{item.Price}$</Text>
                        </View>
                        <View style={productController}>
                            <View style={numberOfProduct}>
                                <TouchableOpacity>
                                    <Text>+</Text>
                                </TouchableOpacity>
                                <Text>{3}</Text>
                                <TouchableOpacity>
                                    <Text>-</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={showDetailContainer}>
                                <Text style={txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }

    render() {
        const { navigate } = this.props.navigation;
        const { wrapper, checkoutButton, checkoutTitle } = styles;
        return (
            <View style={wrapper}>
                <FlatList
                    data={this.state.listCart}
                    renderItem={this.renderItem}
                />
                <TouchableOpacity style={checkoutButton}>
                    <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#2E272B',
        shadowOpacity: 0.8,
        shadowOffset: {
            height: 3,
            width: 0
        },
        //android
        elevation: 2,
        borderColor: '#2E272B',
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default Cart;