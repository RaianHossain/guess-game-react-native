import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from './Card';
import Color from '../constants/Colors';
import Input from './Input'
import NumberContainer from './NumberContainer';
import MainButton from './MainButton';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {        
        const temp = inputText.toString().replace(/[^0-9]/g, '');
        // console.log(temp);
        setEnteredValue(temp)
        // setEnteredValue(inputText);
        
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 to 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
        Keyboard.dismiss();
    }

    let confirmOutput;
    if(confirmed){
        confirmOutput = 
        <Card style={styles.summeryContainer}>
            <Text>You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            {/* <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/> */}
            <MainButton onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
        </Card>
        
    }

    return (
        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()}}>
        <View style = {styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input 
                    style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect= {false} 
                    maxLength={2} 
                    keyboardType="number-pad"
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                /> 
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress = {resetInputHandler} color={Color.accent}/></View>
                    <View style={styles.button}><Button title="Confirm" onPress = {confirmInputHandler} color={Color.primary} /></View>
                </View>
            </Card>
            {confirmOutput}
        </View>
        </TouchableWithoutFeedback>
    ); 
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',        
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        // fontFamily: 'open-sans-bold '
        fontSize: 18,
        fontWeight: 'bold'

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',        
    },
    buttonContainer: {
        flexDirection: "row",
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width:50,
        textAlign: 'center'
    },
    summeryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }
})

export default StartGameScreen;