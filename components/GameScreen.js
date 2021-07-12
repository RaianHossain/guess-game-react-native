import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import Card from './Card';
import MainButton from './MainButton';
import NumberContainer from './NumberContainer';
import { Ionicons } from '@expo/vector-icons'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max -min)) + min;
    if (rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
};

const renderListItem = (value, numOfRound) => {
    return (
        <View key={value} style = {styles.listItem}>
            <Text>#{numOfRound}</Text>
            <Text>{value}</Text>
        </View>
    )
}

const GameScreen = props => {

    const initialGuess = generateRandomBetween(1, 100, userChoice);
    const {userChoice, onGameOver } = props;
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    const  currentLow = useRef(1);
    const  currentHigh = useRef(100);

    

   useEffect(() => {
       if (currentGuess === userChoice){
           onGameOver(pastGuesses.length)
       }
   }, [currentGuess, onGameOver, userChoice]);
    
    const nextGuessHandler = direction => {
        if ((direction ==='lower' && currentGuess < userChoice) || (direction === 'greate' && currentGuess > puserChoice)){
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'Cancel'}]);
            return;
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess+1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRound(currentRounds => currentRounds+1);
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    }

    return (
        <View style={styles.screen}>
            <Text style={{fontWeight: 'bold', fontSize:18}}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                {/* <Button title="LOWER" onPress={() => nextGuessHandler('lower')} /> */}
                <MainButton onPress={() => nextGuessHandler('lower')}><Ionicons name="md-remove" size={24} color='white' /></MainButton>
                {/* <Button title="GREATER" onPress={() => nextGuessHandler('greater')} /> */}
                <MainButton onPress={() => nextGuessHandler('greater')}><Ionicons name="md-add" size={24} color='white' /></MainButton>
            </Card>
            <View style={styles.list}>
            <ScrollView>
                {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
            </ScrollView>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 400,
        maxWidth: '90%'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginTop:10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    list: {
        width:'60%',
        flex: 1
    },
    
})

export default GameScreen;