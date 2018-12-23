import React, { Component } from 'react';
import {
    View, TouchableOpacity,
    Text, StyleSheet, ScrollView,
    Image, FlatList
} from 'react-native';

import backList from '../../../../media/appp/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';

class ListProduct extends Component {
    constructor() {
        super();
        this.state = {
            listProduct: [
                {Name: 'Lace Sleeve Si',Price: '117',Material: 'Material silk',Color: 'Colo RoyalBlue'},
                {Name: 'Lace Sleeve Si',Price: '117',Material: 'Material silk',Color: 'Colo RoyalBlue'},
                {Name: 'Lace Sleeve Si',Price: '117',Material: 'Material silk',Color: 'Colo RoyalBlue'},
                {Name: 'Lace Sleeve Si',Price: '117',Material: 'Material silk',Color: 'Colo RoyalBlue'},
                {Name: 'Lace Sleeve Si',Price: '117',Material: 'Material silk',Color: 'Colo RoyalBlue'},
            ],
        }
    }

    renderItem = ({ item }) => {
        const {
            productContainer, productImage, productInfo, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
        } = styles;
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('ProductDetailScreen')
            }}>
                <View style={productContainer}>
                    <Image style={productImage} source={sp1} />
                    <View style={productInfo}>
                        <Text style={txtName}>{item.Name}</Text>
                        <Text style={txtPrice}>{item.Price}$</Text>
                        <Text style={txtMaterial}>{item.Material}</Text>
                        <View style={lastRowInfo}>
                            <Text style={txtColor}>{item.Color}</Text>
                            <View style={{ backgroundColor: 'cyan', height: 16, width: 16, borderRadius: 8 }} />
                            <TouchableOpacity>
                                <Text style={txtShowDetail}>SHOW DETAILS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const {
            container, header, wrapper, backStyle, titleStyle,
        } = styles;
        return (
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={backList} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <FlatList
                        data={this.state.listProduct}
                        renderItem={this.renderItem}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    wrapper: {
        backgroundColor: '#fff',
        margin: 10,
        paddingHorizontal: 10,
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
    backStyle: {
        width: 30,
        height: 30
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#FFF',
        borderLeftColor: '#FFF',
        borderRightColor: '#FFF',
        borderWidth: 1
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 20
    },
    productImage: {
        width: 90,
        height: (90 * 452) / 361
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65',
    },
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 11
    }
});

export default ListProduct;