import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

import signIn from '../../api/signIn';
import saveToken from '../../api/saveToken';
import global from '../global';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: this.props.password,
        };
    }

    onSignIn() {
        const { email, password } = this.state;
        signIn(email, password)
            .then(res => {
                global.onSignIn(res.user);
                this.props.goBackToMain();
                saveToken(res.token);
            })
            .catch(err => console.log(err));
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        return (
            <View>
                <TextInput
                    style={inputStyle} placeholder="Enter your email"
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={inputStyle} placeholder="Enter your password"
                    value={this.state.password}
                    secureTextEntry
                    onChangeText={text => this.setState({ password: text })}
                />
                <TouchableOpacity style={bigButton} onPress={this.onSignIn.bind(this)}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
});