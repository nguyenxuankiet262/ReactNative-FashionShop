import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import sp1 from '../../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../../media/temp/sp4.jpeg';

export default class TopProduct extends Component {
    render() {
        const { navigate } = this.props;
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
                <View style={body}>
                    <TouchableOpacity onPress={() => {
                        navigate('ListProductScreen')
                    }}>
                        <View style={productContainer}>
                            <Image source={sp1} style={productImage} />
                            <Text style={produceName}>PRODUCT NAME</Text>
                            <Text style={producePrice}>400$</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigate('ListProductScreen')
                    }}>
                        <View style={productContainer}>
                            <Image source={sp2} style={productImage} />
                            <Text style={produceName}>PRODUCT NAME</Text>
                            <Text style={producePrice}>250$</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ height: 10, width }} />
                    <TouchableOpacity onPress={() => {
                        navigate('ListProductScreen')
                    }}>
                        <View style={productContainer}>
                            <Image source={sp3} style={productImage} />
                            <Text style={produceName}>PRODUCT NAME</Text>
                            <Text style={producePrice}>400$</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigate('ListProductScreen')
                    }}>
                        <View style={productContainer}>
                            <Image source={sp4} style={productImage} />
                            <Text style={produceName}>PRODUCT NAME</Text>
                            <Text style={producePrice}>250$</Text>
                        </View>
                    </TouchableOpacity>
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