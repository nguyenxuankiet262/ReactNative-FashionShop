import React, { Component } from 'react';
import {
    View, Text, TextInput,
    TouchableOpacity, Image, StyleSheet
} from 'react-native';

import icBack from '../../media/appp/back_white.png';
import icLogo from '../../media/appp/ic_logo.png';
import SignIn from './SignIn';
import SignUp from './SignUp';


export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true,
            email: '',
            password: '',
        };
    }

    signIn() {
        this.setState({ isSignIn: true });
    }

    signUp() {
        this.setState({ isSignIn: false });
    }

    gotoSignIn(_email, _password) {
        this.setState({
            isSignIn: true,
            email: _email,
            password: _password,
        });
    }

    goBackToMain() {
        this.props.navigation.goBack();
    }
    render() {
        const {
            row1, iconStyle, titleStyle,
            container, controlStyle,
            signInStyle, signUpStyle,
            activeStyle, inactiveStyle,
        } = styles;

        const { isSignIn } = this.state;
        const mainJSX = isSignIn ?
            <SignIn
                email={this.state.email}
                password={this.state.password}
                goBackToMain={this.goBackToMain.bind(this)}
            /> :
            <SignUp
                gotoSignIn={this.gotoSignIn.bind(this)}
            />;
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                {mainJSX}
                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
                        <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 30 },
    iconStyle: { width: 30, height: 30 },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#34B089'
    },
    signInStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        justifyContent: 'center',
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginLeft: 1,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20
    },
});