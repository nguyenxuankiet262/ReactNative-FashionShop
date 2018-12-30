import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, FlatList, ActivityIndicator,
    Dimensions, StyleSheet, Image
} from 'react-native';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

const url = 'http://192.168.1.4/app/images/product/';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
        }
    }

    renderItem = ({ item }) => {
        const { product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer } = styles;
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('ProductDetailScreen', { product: item })
            }}>
                <View style={product}>
                    <Image source={{ uri: url + item.images[0] }} style={productImage} />
                    <View style={[mainRight]}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={txtName}>{toTitleCase(item.name)}</Text>
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={txtPrice}>{item.price}$</Text>
                        </View>
                        <View style={productController}>
                            <View style={numberOfProduct}>
                                <TouchableOpacity>
                                    <Text>+</Text>
                                </TouchableOpacity>
                                <Text>{item.quantity}</Text>
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

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: false,
             })
        },500);
    }

    render() {
        const { wrapper, checkoutButton, checkoutTitle } = styles;

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={wrapper}>
                <FlatList
                    data={this.props.screenProps}
                    renderItem={this.renderItem}
                    keyExtractor={() => Math.random().toString(36).substr(2, 9)}
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