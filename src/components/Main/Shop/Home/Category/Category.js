import React, { Component } from 'react';
import { FlatList, View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';


const { width, height } = Dimensions.get('window');

export default class Category extends Component {

    renderItem = ({ item }) => {
        return (
            <View style={{ padding: 10 }}>
                <Text>{item.name}</Text>
            </View>
        )
    }
    render() {
        const { navigate } = this.props;
        const { listCategory } = this.props;
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;

        return (
            <View style={wrapper}>
                <View style={{ justifyContent: 'center', flex: 1, paddingTop: 5 }}>
                    <Text style={textStyle} >LIST OF CATEGORY</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', flex: 4 }}>
                    <Swiper autoplay={true} showsPagination showsButtons={true} width={imageWidth} height={imageHeight}>
                        {
                            listCategory.map(category => (
                                <TouchableOpacity onPress={() => {
                                    navigate('ListProductScreen')
                                }} key={category.id}>
                                    <ImageBackground source={{uri: 'http://192.168.1.4/app/images/type/' + category.image}} style={imageStyle}>
                                        <Text style={cateTitle}>{category.name}</Text>
                                    </ImageBackground >
                                </TouchableOpacity>
                            ))
                        }
                    </Swiper>
                </View>
            </View>
        );
    }
}
//933 x 465
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.32,
        backgroundColor: 'white',
        shadowColor: '#2E272B',
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 3,
            width: 0
        },
        //android
        elevation: 2,
        position: 'relative',
        margin: 10,
        padding: 10,
        paddingTop: 0,
        borderColor: '#2E272B',
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
});