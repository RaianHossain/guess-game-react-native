import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, requireNativeComponent } from 'react-native';
import GameOverScreen from './components/GameOverScreen';
import GameScreen from './components/GameScreen';
import Head from './components/Head';
import StartGameScreen from './components/StartGameScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts//OpenSans-Bold.ttf')
//   });
// };

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessCount, setGuessCount] = useState(0);
  // const [dataLoaded, setDataLoaded] = useState(false);

  // if(!dataLoaded){
  //   return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)} />;
  // }

  const newGameHandler = () => {
    setGuessCount(0);
    setUserNumber(null);
  }
    
  

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessCount(0);
  }

  const gameOverHandler = (numOfRound) => {
    setGuessCount(numOfRound);
  }

  let content = <StartGameScreen  onStartGame = {startGameHandler}/>
  if (userNumber && guessCount <= 0){
    content = <GameScreen userChoice = {userNumber} onGameOver={gameOverHandler} />
  }else if (guessCount > 0) {
    content = <GameOverScreen userNumber={userNumber} roundsNumber={guessCount} onRestart={newGameHandler}></GameOverScreen>
  }
  return (
    <View style={styles.screen}>
      <Head title="Guess a Number"></Head>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,    
  },
});
