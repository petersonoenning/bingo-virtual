

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '../styles/styles';
import NumeroSorteado from '../components/NumeroSorteado';
import CartelaJogador from '../components/CartelaJogador';

const obterLetraBingo = (numero) => {
  if (numero >= 1 && numero <= 10) return 'B';
  if (numero >= 11 && numero <= 20) return 'I';
  if (numero >= 21 && numero <= 30) return 'N';
  if (numero >= 31 && numero <= 40) return 'G';
  if (numero >= 41 && numero <= 50) return 'O';
  return '';
};

const GritadorScreen = () => {
  const [numerosSorteados, setNumerosSorteados] = useState([]);
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [sorteando, setSorteando] = useState(false);

  const sortearNumero = () => {
    if (numerosSorteados.length >= 50) return;
    setSorteando(true);

    setTimeout(() => {
      let novoNumero;
      do {
        novoNumero = Math.floor(Math.random() * 50) + 1;
      } while (numerosSorteados.includes(novoNumero));

      setNumerosSorteados([...numerosSorteados, novoNumero]);
      setNumeroSorteado(novoNumero);
      setSorteando(false);
    }, 1500);
  };

  const reiniciarJogo = () => {
    setNumerosSorteados([]);
    setNumeroSorteado(null);
    setSorteando(false);
  };

  return (
    <View style={styles.container}>
      {/* Área do topo com botões e número sorteado */}
      <View style={styles.topo}>
        <TouchableOpacity style={styles.botaoSortear} onPress={sortearNumero}>
          <Text style={styles.textoBotao}>Sortear</Text>
        </TouchableOpacity>

        {/* Exibe o número sorteado com a legenda BINGO */}
        <View style={styles.resultadoSorteio}>
          {sorteando ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            numeroSorteado && (
              <View style={styles.numeroComLetra}>
                <Text style={styles.letraBingo}>{obterLetraBingo(numeroSorteado)}</Text>
                <NumeroSorteado numero={numeroSorteado} />
              </View>
            )
          )}
        </View>
      </View>

      {/* Cartela do Jogador */}
      <CartelaJogador numerosSorteados={numerosSorteados} />

      {/* Botão de Reiniciar */}
      <TouchableOpacity style={styles.botaoReiniciar} onPress={reiniciarJogo}>
        <Text style={styles.textoBotao}>Reiniciar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GritadorScreen;
