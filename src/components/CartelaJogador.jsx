import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const CartelaJogador = ({ cartela, marcados = [], marcarNumero, numerosSorteados = [] }) => {
  if (cartela) {
    // Tela do Jogador
    return (
      <View style={styles.cartela}>
        {Object.keys(cartela).map((letra) => (
          <View key={letra} style={styles.coluna}>
            <Text style={styles.letra}>{letra}</Text>
            {cartela[letra].map((num) => (
              <TouchableOpacity key={num} onPress={() => marcarNumero(num)}>
                <View style={[styles.bolinha, marcados.includes(num) && styles.bolinhaSorteada]}>
                  <Text style={styles.textoBolinha}>{num}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    );
  } else {

    return (
      <View style={styles.cartela}>
        {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
          <View
            key={num}
            style={[
              styles.bolinha,
              numerosSorteados.includes(num) && styles.bolinhaSorteada,
            ]}
          >
            <Text style={styles.textoBolinha}>{num}</Text>
          </View>
        ))}
      </View>
    );
  }
};

export default CartelaJogador;
