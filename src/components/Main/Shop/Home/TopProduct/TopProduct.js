import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default class TopProduct extends Component {
    render() {
        const { navigate } = this.props;
        const { listTopProduct } = this.props;
        const {
            container, titleContainer, title,
            body, productContainer, productImage,
            produceName, producePrice
        } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>{
                    listTopProduct.map(topProduct => (
                        <TouchableOpacity onPress={() => {
                            navigate('ProductDetailScreen', {product: topProduct})
                        }} key={topProduct.id}>
                            <View style={productContainer}>
                                <Image source={{uri: 'http://192.168.1.4/app/images/product/' + topProduct.images[0]}} style={productImage} />
                                <Text style={produceName}>{topProduct.name.toUpperCase()}</Text>
                                <Text style={producePrice}>{topProduct.price}$</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 3,
            width: 0
        },
        //android
        elevation: 2,
        padding: 10,
        paddingTop: 0
    },
    titleContainer: {
        paddingTop: 15,
        paddingBottom: 15,
        justifyContent: 'center',
    },
    title: {
        color: '#AFAEAF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: produtWidth,
        shadowColor: '#2E272B',
        shadowOpacity: 0.8,
        shadowOffset: {
            height: 3,
            width: 0
        },
        //android
        elevation: 2,
        borderColor: '#2E272B',
        marginBottom:10,
    },
    productImage: {
        width: produtWidth,
        height: productImageHeight
    },
    produceName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    producePrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});