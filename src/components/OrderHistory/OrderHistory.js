import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, FlatList,
} from 'react-native';
import icBack from '../../media/appp/back_white.png';
import icLogo from '../../media/appp/ic_logo.png';

export default class OrderHistory extends Component {
    constructor() {
        super();
        this.state = {
            listOrder: [
                { Id: 'ORD001', Time: '2017-04-19 08:30:08', Status: 'Pending', Total: '100$' },
                { Id: 'ORD001', Time: '2017-04-19 08:30:08', Status: 'Pending', Total: '100$' },
                { Id: 'ORD001', Time: '2017-04-19 08:30:08', Status: 'Pending', Total: '100$' },
                { Id: 'ORD001', Time: '2017-04-19 08:30:08', Status: 'Pending', Total: '100$' },
                { Id: 'ORD001', Time: '2017-04-19 08:30:08', Status: 'Pending', Total: '100$' },
            ],
        }
    }

    goBackToMain() {
        this.props.navigation.goBack();
    }

    renderItem = ({ item }) => {
        const {
            orderRow,
        } = styles;
        return (
            <View style={orderRow}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                    <Text style={{ color: '#2ABB9C' }}>{item.Id}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                    <Text style={{ color: '#C21C70' }}>{item.Time}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                    <Text style={{ color: '#2ABB9C' }}>{item.Status}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                    <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>{item.Total}</Text>
                </View>
            </View>
        )
    }


    render() {
        const {
            row1, iconStyle, titleStyle,
            container, body,
        } = styles;
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Order History</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <View style={body}>
                    <FlatList
                        data={this.state.listOrder}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    row1: { flex: 1, backgroundColor: '#34B089', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6' },
    orderRow: {
        height: width / 3,
        backgroundColor: '#FFF',
        margin: 10,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around',
        shadowColor: '#2E272B',
        shadowOpacity: 0.8,
        shadowOffset: {
            height: 3,
            width: 0
        },
        //android
        elevation: 2,
        borderColor: '#2E272B',
    }
});