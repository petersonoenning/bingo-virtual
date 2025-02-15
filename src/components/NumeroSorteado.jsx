import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const NumeroSorteado = ({ numero }) => {
  return (
    <View style={styles.numeroSorteadoContainer}>
      <Text style={styles.numeroSorteadoTexto}>{numero}</Text>
    </View>
  );
};

export default NumeroSorteado;
