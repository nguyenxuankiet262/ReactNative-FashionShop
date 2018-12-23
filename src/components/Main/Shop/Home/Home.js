import React, { Component } from 'react';
import { ScrollView, ActivityIndicator, Text, View } from 'react-native';
import Collection from './Collection/Collection';
import Category from './Category/Category';
import TopProduct from './TopProduct/TopProduct';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCategory: [],
            listTopProduct: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const url = 'http://192.168.1.4/app'
            fetch(url)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        listCategory: responseJson.type,
                        listTopProduct: responseJson.product,
                        
                        isLoading: false,
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
        }, 1000); 
    }

    render() {
        const { navigate } = this.props.navigation;
        const { listCategory, listTopProduct } = this.state;
        
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Collection/>
                <Category navigate = {navigate} listCategory = {listCategory}/>
                <TopProduct navigate = {navigate} listTopProduct = {listTopProduct}/>
            </ScrollView>
        );
    }
}

export default Home;