import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';

export default class PersonalDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    navigate() {
        this.props.navigation.navigate('searchResult', { name: this.state.name });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circleTop}></View>
                <View style={styles.circleBottom}></View>
                <Text style={styles.heading}>Enter your <Text style={{ fontWeight: '700' }}>Name</Text></Text>
                <TextInput
                    value={this.state.name}
                    onChangeText={(value) => this.setState({ name: value })}
                    placeholder={'Your Name'}
                    style={styles.textinput}
                />
                <Text style={styles.paragraph}>
                    We need this so we can let SHARERS_NAME know you're here. Your name will only be shared with people that are part of this search and will not be public to other users of the app.
                </Text>
                <TouchableOpacity style={[styles.button, this.state.name == '' ? styles.buttonDisabled : {}]}
                    disabled={this.state.name == ''}
                    onPress={() => { this.navigate() }}>
                    <Text style={styles.buttonText}>Start Searching!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
