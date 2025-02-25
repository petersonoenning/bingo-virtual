# 🎱 Bingo Virtual

O **Bingo Virtual** é um aplicativo interativo desenvolvido em **React Native com Expo**, permitindo que jogadores simulem partidas de bingo de forma dinâmica e divertida. O jogo gera automaticamente uma cartela de bingo e realiza o sorteio de números sem repetições, destacando os números sorteados na cartela.

---

## 🚀 Funcionalidades

✅ Geração automática de cartelas de bingo.
✅ Sorteio de números sem repetição.
✅ Marcação automática dos números sorteados.
✅ Feedback visual aprimorado para os números sorteados.
✅ Interface responsiva e amigável.

---

## 📸 Capturas de Tela

![image](https://github.com/user-attachments/assets/e7932c26-caac-4004-b8b8-318b2eaca297)
![image](https://github.com/user-attachments/assets/cc136830-e06a-44a5-8ac7-3510bc5c3a10)
![image](https://github.com/user-attachments/assets/eabe7e37-fc00-45ce-a12d-aacf0c8a0de3)



---

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **Expo**
- **Hooks (useState, useEffect)**
- **Styled Components (para estilização modular)**

---

## 📦 Instalação

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/petersonoenning/bingo-virtual.git
   cd bingo-virtual
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Execute o projeto:**
   ```sh
   npx expo start
   ```

---

## 📦 Instale o APK e jogue gratuitamente!

https://expo.dev/artifacts/eas/eWM5NF428tFUxMAdffmfj9.apk

---

## 📜 Como Jogar

O **Bingo Virtual** pode ser jogado de duas formas: **como jogador** ou **como sorteador**.

### 🎮 Modo Jogador
1. **Abra o aplicativo** e visualize a cartela gerada automaticamente.
2. **Acompanhe o sorteio de números** e toque nos números correspondentes para marcá-los na cartela.
3. **Ao completar a cartela, o jogo pode ser reiniciado.**

### 🎲 Modo Sorteador
1. **Abra o aplicativo e acesse a tela de sorteio.**
2. **Pressione o botão de sorteio** para gerar um número aleatório.
3. **O número sorteado será destacado na tela e pode ser anunciado aos jogadores.**
4. **Continue sorteando até que um jogador complete a cartela.**

---

## 🛠️ Estrutura do Projeto

```
BINGO-VIRTUAL
│-- .expo/
│-- assets/
│-- node_modules/
│-- src/
│   ├── components/
│   │   ├── CartelaJogador.jsx
│   │   ├── NumeroSorteado.jsx
│   ├── screens/
│   │   ├── GritadorScreen.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── JogadorScreen.jsx
│   ├── styles/
│   │   ├── styles.js
│-- .gitignore
│-- App.js
│-- app.json
│-- babel.config.js
│-- index.js
│-- package-lock.json
│-- package.json
```
---

Desenvolvido com ❤️ por [Peterson Oenning](https://github.com/petersonoenning).
