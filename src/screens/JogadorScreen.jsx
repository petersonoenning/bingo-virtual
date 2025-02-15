import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
const gerarCartela = () => {
    const gerarNumeros = (min, max) => {
      const numeros = new Set();
      while (numeros.size < 5) {
        numeros.add(Math.floor(Math.random() * (max - min + 1)) + min);
      }
      return [...numeros];
    };
  
    return {
      B: gerarNumeros(1, 10),
      I: gerarNumeros(11, 20),
      N: gerarNumeros(21, 30),
      G: gerarNumeros(31, 40),
      O: gerarNumeros(41, 50),
    };
  };
  
  const JogadorScreen = () => {
    const [cartela, setCartela] = useState(gerarCartela());
    const [marcados, setMarcados] = useState([]);
  
    const marcarNumero = (num) => {
      if (!marcados.includes(num)) {
        setMarcados([...marcados, num]);
      }
    };
  
    const reiniciarJogo = () => {
      setCartela(gerarCartela());
      setMarcados([]);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.cartela}>
          {Object.keys(cartela).map((letra) => (
            <View key={letra} style={styles.coluna}>
              <Text style={styles.letra}>{letra}</Text>
              {cartela[letra].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[styles.bolinha, marcados.includes(num) ? styles.bolinhaSorteada : styles.bolinhaNormal]}
                  onPress={() => marcarNumero(num)}
                >
                  <Text style={styles.textoBolinha}>{num}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
  
        <TouchableOpacity style={styles.botaoReiniciar} onPress={reiniciarJogo}>
          <Text style={styles.textoBotao}>Reiniciar Jogo</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default JogadorScreen;