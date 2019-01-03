import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native'
import icMenu from '../../../media/appp/ic_menu.png';
import icLogo from '../../../media/appp/ic_logo.png';
import global from '../../global';

import { TextInput } from 'react-native-gesture-handler';

import searchProduct from '../../../api/searchProduct';

const { height } = Dimensions.get('window');
class Header extends Component {
    constructor(props){
        super(props);
    }
    openMenu() {
        const { open } = this.props;
        open();
    }

    onSearch(text){
        console.log(text);
        searchProduct(text)
        .then(arrProduct => global.setArraySearch(arrProduct))
        .catch(err => global.setArraySearch([]));
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.openMenu.bind(this)}>
                        <Image style={styles.iconStyle} source={icMenu} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Wearing a Dress</Text>
                    <Image style={styles.iconStyle} source={icLogo} />
                </View>
                <TextInput
                    style={styles.searchBar}
                    placeholder="What do you want to buy?"
                    onChangeText={text => {
                        this.onSearch(text)
                    }}
                    onFocus={() => global.gotoSearch()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: height / 8,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent:'space-around'
    },
    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    textHeader:{
        color:'white',
        fontFamily: 'Avenir',
        fontSize: 20,
    },
    searchBar:{
        height: height/20,
        backgroundColor:'white',
        textAlign:'center'
    },
    iconStyle:{
        width:25,
        height:25
    }
})

export default Header
