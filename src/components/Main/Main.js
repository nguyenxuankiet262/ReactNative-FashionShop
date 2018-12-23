import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';
export default class Main extends Component {
    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigate = {navigate} close={this.closeControlPanel.bind(this)}/>}
                openDrawerOffset={0.4}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}