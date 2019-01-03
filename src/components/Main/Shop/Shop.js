import React, { Component } from 'react';
import { View, StyleSheet, Image} from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import HomeStack from './Router/RouterHome';
import CartStack from './Router/RouterCart';
import Contact from './Contact/Contact';
import SearchStack from './Router/RouterSearch'
import Header from './Header'
import homeIconS from '../../../media/appp/home.png';
import homeIcon from '../../../media/appp/home0.png';
import cartIconS from '../../../media/appp/cart.png';
import cartIcon from '../../../media/appp/cart0.png';
import searchIconS from '../../../media/appp/search.png';
import searchIcon from '../../../media/appp/search0.png';
import contactIconS from '../../../media/appp/contact.png';
import contactIcon from '../../../media/appp/contact0.png';

import global from '../../global';

import saveCart from '../../../api/saveCart';
import getCart from '../../../api/getCart';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            cartArray: [],
        }
        global.addProductToCart = this.addProductToCart.bind(this);
        global.incrQuantity = this.incrQuantity.bind(this);
        global.decrQuantity = this.decrQuantity.bind(this);
        global.removeProduct = this.removeProduct.bind(this);
        global.gotoSearch = this.gotoSearch.bind(this);
        global.updateCart = this.updateCart.bind(this);
    }

    gotoSearch(){
        this.setState({
            selectedTab : 'search'
        })
    }

    addProductToCart(product) {
        this.setState({ cartArray: this.state.cartArray.concat(product)}, () => saveCart(this.state.cartArray));
    }

    incrQuantity(_index) {
        const newCart = this.state.cartArray.map((e, index) => {
            if(index !== _index){
                return e;
            }
            else{
                if(e.quantity === 10){
                    e.quantity = e.quantity;
                }
                else{
                    e.quantity = e.quantity + 1;
                }
                return e;
            }
        });
        this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
    }

    decrQuantity(_index) {
        const newCart = this.state.cartArray.map((e, index) => {
            if(index !== _index){
                return e;
            }
            else{
                if(e.quantity == 1){
                    e.quantity = e.quantity;
                }
                else{
                    e.quantity = e.quantity - 1;
                }
                return e;
            }
        });
        this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
    }
    
    removeProduct(_index) {
        const newCart = this.state.cartArray.filter((e, index) => index !== _index);
        this.setState({ cartArray: newCart }, 
            () => saveCart(this.state.cartArray)
        );
    }

    updateCart(){
        getCart()
        .then(cartArray => this.setState({
            cartArray
        }));
    }

    componentDidMount(){
        getCart()
        .then(cartArray => this.setState({
            cartArray
        }));
    }

    render() {
        const { cartArray } = this.state;
        console.log(cartArray);
        return (
            <View style={{ flex: 1 }}>
                <Header open={this.props.open} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image style={styles.iconStyle} source={homeIcon} />}
                        renderSelectedIcon={() => <Image style={styles.iconStyle} source={homeIconS} />}
                        selectedTitleStyle={{ color: '#34B089' }}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <HomeStack />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        badgeText={cartArray.length}
                        renderIcon={() => <Image style={styles.iconStyle} source={cartIcon} />}
                        renderSelectedIcon={() => <Image style={styles.iconStyle} source={cartIconS} />}
                        selectedTitleStyle={{ color: '#34B089' }}
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <CartStack screenProps={cartArray}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image style={styles.iconStyle} source={searchIcon} />}
                        renderSelectedIcon={() => <Image style={styles.iconStyle} source={searchIconS} />}
                        selectedTitleStyle={{ color: '#34B089' }}
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <SearchStack />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image style={styles.iconStyle} source={contactIcon} />}
                        renderSelectedIcon={() => <Image style={styles.iconStyle} source={contactIconS} />}
                        selectedTitleStyle={{ color: '#34B089' }}
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 20,
        height: 20
    }
})

export default Shop;