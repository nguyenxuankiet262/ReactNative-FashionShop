import React, { Component } from 'react';
import {
    View, TouchableOpacity,
    Text, StyleSheet, Divider,
    Image, FlatList, ActivityIndicator, RefreshControl
} from 'react-native';
import backList from '../../../../media/appp/backList.png';

import getListProduct from '../../../../api/getListProduct';

const url = 'http://192.168.1.4/app/images/product/';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: [],
            isLoading: true,
            refreshing: false,
            page: 2,
        }
    }

    componentDidMount() {
        const { id } = this.props.navigation.getParam('category', 'non');
        this.loadListProduct(id, 1);
    }

    loadListProduct(id, page) {
        setTimeout(() => {
            getListProduct(id, page)
                .then(arrProduct => {
                    this.setState({
                        listProduct: this.state.listProduct.concat(arrProduct),
                        isLoading: false,
                        refreshing: false,
                    });
                })
                .catch(err => console.log(err));
        }, 500);
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
                    <Image style={productImage} source={{ uri: url + item.images[0] }} />
                    <View style={productInfo}>
                        <Text style={txtName}>{toTitleCase(item.name)}</Text>
                        <Text style={txtPrice}>{item.price}$</Text>
                        <Text style={txtMaterial}>{toTitleCase(item.material)}</Text>
                        <View style={lastRowInfo}>
                            <Text style={txtColor}>{item.color}</Text>
                            <View style={{ backgroundColor: item.color.toLowerCase(), height: 16, width: 16, borderRadius: 8 }} />
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
        const { id, name } = this.props.navigation.getParam('category', 'non');

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={backList} style={backStyle} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>{name}</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    <FlatList
                        data={this.state.listProduct}
                        renderItem={this.renderItem}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={() => {
                                    this.setState({
                                        page: this.state.page + 1,
                                        refreshing: true,
                                    })
                                    this.loadListProduct(id, this.state.page)
                                }
                                }
                            />
                        }
                        onEndReached={() => {
                            this.setState({
                                page: this.state.page + 1,
                            })
                            this.loadListProduct(id, this.state.page)
                        }
                        } 
                    />
                </View>
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