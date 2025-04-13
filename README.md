# 🤖 Number Guessing Game (React Native)

A fun mobile game where the **bot tries to guess the number** you picked between **1 and 99**, and you guide it by telling whether its guess is too high or too low.

---

## 📱 Features

- Bot tries to guess your number
- Interactive UI with cheat detection
- Modals for game start, game over, and cheating
- Smooth animations and colorful buttons
- Built with **React Native** and **Expo**

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI (install with `npm install -g expo-cli`)

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/number-guessing-game.git

# Navigate into the project directory
cd number-guessing-game

# Install dependencies
npm install
# or
yarn install
```

---

## ▶️ Running the App

### iOS (macOS only)

```bash
npx react-native run-ios
```

### Android

```bash
npx react-native run-android
```

### Expo Go (Recommended for easy testing)

```bash
expo start
```
Scan the QR code with the **Expo Go** app on your mobile device.

---

## 🎮 How to Play

1. Enter a secret number between **1 and 99**.
2. Press **Start**.
3. The bot will guess a number.
4. Use:
   - 🔼 **Higher Number** if your number is higher than the bot's guess.
   - 🔽 **Lower Number** if your number is lower than the bot's guess.
5. The game ends when the bot correctly guesses your number.

---

## 💡 Game Logic

- If the player lies (e.g., presses “Higher” when it's actually lower), the game detects **cheating** and shows a warning.
- A modal is used to show game status like **Start**, **Game Over**, and **Cheating Warning**.

---

## 🤝 Contributing

Contributions are welcome!  
To contribute:

1. **Fork** the repo
2. **Create** a new branch (`git checkout -b feature/yourFeature`)
3. **Commit** your changes (`git commit -m 'Add some feature'`)
4. **Push** to the branch (`git push origin feature/yourFeature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
