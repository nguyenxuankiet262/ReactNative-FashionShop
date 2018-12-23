import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import backIcon from '../../../../media/appp/back.png';
import cartIcon from '../../../../media/appp/cartfull.png';

class ProductDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ProductDetail;