import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Color from '../constants/Colors'

const Input = props => {
    return(
        <TextInput {...props} style = {{...styles.input, ...props.style}} />
    );
}

const styles = StyleSheet.create({
    input: {
        height:30,
        borderBottomColor: 'grey',
        borderBottomWidth:1, 
        marginVertical: 10
    }
})

export default Input;