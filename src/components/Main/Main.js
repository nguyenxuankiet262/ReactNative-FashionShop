import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';

import checkLogin from '../../api/checkLogin';
import getToken from '../../api/getToken';

import global from '../global';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null,
        }
    }
    componentDidMount() {
        getToken()
        .then(token => checkLogin(token))
        .then(res => {
            global.onSignIn(res.user);
            this.setState({
                user: res.user,
            })
        })
        .catch(err => console.log('LOI CHECK LOGIN', err));
    }

    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        const {navigate} = this.props.navigation;
        const {user} = this.state;
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu user={user} navigate = {navigate} close={this.closeControlPanel.bind(this)}/>}
                openDrawerOffset={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}