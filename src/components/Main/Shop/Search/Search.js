import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList, View, Image, Dimensions } from 'react-native';
import sp1 from '../../../../media/temp/sp3.jpeg';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class Search extends Component {
    constructor() {
        super();
        this.state = {
            listSearch: [
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
            product, mainRight, txtMaterial, txtColor,
            txtName, txtPrice, productImage,
            txtShowDetail, showDetailContainer,
        } = styles;
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('ProductDetailScreen')
            }}>
                <View style={product}>
                    <Image source={sp1} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase(item.Name)}</Text>
                        <Text style={txtPrice}>{item.Price}$</Text>
                        <Text style={txtMaterial}>{item.Material}</Text>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={txtColor}>{item.Color}</Text>
                            <View
                                style={{
                                    height: 15,
                                    width: 15,
                                    backgroundColor: 'white',
                                    borderRadius: 15,
                                    marginLeft: 10
                                }}
                            />
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const { wrapper } = styles;
        return (
            <View style={wrapper}>
<FlatList
                    data={this.state.listSearch}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F6F6F6',
        flex: 1
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
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
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
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});

export default Search;