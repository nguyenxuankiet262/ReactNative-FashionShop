import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import MenuStack from './Router/RouterMenu'
StatusBar.setHidden(true);
export default class App extends Component {
  render() {
    return (
      <MenuStack/>
    );
  }
}
