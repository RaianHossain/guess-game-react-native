import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Color from '../constants/Colors'

const MainButton = props => {
    return (
        <TouchableOpacity onPress = {props.onPress}>
            <View style = {styles.buttonContainer}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: Color.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default MainButton;