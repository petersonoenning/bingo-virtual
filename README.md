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

=![image](https://github.com/user-attachments/assets/ecb2fe95-de57-486c-a404-65b95513301c)
![image](https://github.com/user-attachments/assets/d1e97b23-d302-4057-8377-cac326cfdece)
![image](https://github.com/user-attachments/assets/da82fef0-1f8f-4e62-8f1b-b28c0d504df9)


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
