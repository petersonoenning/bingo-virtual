import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 26,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#16213E',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: '75%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  botaoSortear: {
    backgroundColor: '#1e90ff',
    padding: 20,
    borderRadius: 50,
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },


  /** Estilo do carregamento enquanto o número está sendo sorteado */
  carregandoSorteio: {
    backgroundColor: '#1e90ff',
    padding: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start', 
    marginLeft: 50, 
  },

  /** Contêiner do número sorteado + Letra BINGO */
  numeroComLetra: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dc3545',
    padding: 20,
    borderRadius: 30,
    marginTop: 20,
  },
  letraBingo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 8,
  },
  letra: {
    fontSize: 26, // Aumenta o tamanho da fonte
    fontWeight: 'bold', // Deixa em negrito
    color: '#dc3545', // 
    textAlign: 'center', // Centraliza o texto na coluna
    marginBottom: 5, // Dá um espaço entre a letra e os números
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Adiciona um efeito de sombra
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  

  /** Estilização do número sorteado */
  numeroSorteadoContainer: {
    backgroundColor: '#dc3545',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numeroSorteadoTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },

  cartela: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 15,
  },

  /** Estilização das bolinhas da cartela */
  bolinha: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
  },
  bolinhaSorteada: {
    backgroundColor: '#dc3545',
  },
  textoBolinha: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  botaoReiniciar: {
    backgroundColor: '#ff6347',
    padding: 8,
    borderRadius: 8,
    marginTop: 15,
  },
});
