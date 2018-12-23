import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import bannerImage from '../../../../../media/temp/banner.jpg'

const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 1, justifyContent: 'center', paddingTop: 5 }}>
                    <Text style={textStyle} >SPRING COLLECTION</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'flex-end' }}>
                    <Image source={bannerImage} style={imageStyle} />
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
        position:'relative',
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
        width: imageWidth
    }
});