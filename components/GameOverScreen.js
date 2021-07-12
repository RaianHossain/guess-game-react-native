import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Color from '../constants/Colors';
import pic from '../assets/success.png'
import MainButton from './MainButton';

const GameOverScreen = props => {
    return(
        
        <View style = {styles.screen}>
            <Text style={{fontWeight: 'bold', fontSize:18}}>The Game is Over!</Text>
            <View  style={styles.imageContainer}>
                {/* <Image  style={styles.image} source={require('../assets/success.png')} resizeMode='cover' /> */}
                <Image style={styles.image} source={{uri: 'https://static01.nyt.com/images/2021/01/19/sports/19summit-k2-2/19summit-k2-2-articleLarge.jpg?quality=75&auto=webp&disable=upscale'}} />
            </View>
            <Text style={{fontSize:15, fontWeight:'bold', marginBottom:10}}>Your Phone took {props.roundsNumber} guesses for the Number {props.userNumber}</Text>
            {/* <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>Number Was: {props.userNumber}</Text> */}
            {/* <Button title="New Game" onPress={props.onRestart}/> */}
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width:'80%',
        height: 300,
        margin: 25
        
    },
    image: {
        width:'100%',
        height: '100%',
        borderRadius: 200,
        borderWidth:3
    }
})

export default GameOverScreen;