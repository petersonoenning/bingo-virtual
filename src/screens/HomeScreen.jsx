import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎱 Bingo Virtual 🎉</Text>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Gritador')}
      >
        <Text style={styles.buttonText}>🎤 Sou o Sorteador</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Jogador')}
      >
        <Text style={styles.buttonText}>🎮 Sou um Jogador</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
