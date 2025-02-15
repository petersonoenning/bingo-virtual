import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import GritadorScreen from './src/screens/GritadorScreen';
import JogadorScreen from './src/screens/JogadorScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bingo Online' }} />
        <Stack.Screen name="Gritador" component={GritadorScreen} options={{ title: 'Sorteador' }} />
        <Stack.Screen name="Jogador" component={JogadorScreen} options={{ title: 'Jogador' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
