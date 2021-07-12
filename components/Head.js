import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants/Colors'

const Head = props => {
    return(
        <View style = {styles.head}>
            <Text style = {styles.headTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        width:"100%",
        height:90,
        paddingTop: 36,
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headTitle: {
        color: 'black',
        fontSize:18,
        fontWeight: 'bold', 
        fontSize: 23
    }
})

export default Head;