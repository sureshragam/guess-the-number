import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useEffect, useState } from "react";
import { StartModal } from "./src/components/StartModal";
import { GameOverModal } from "./src/components/GameOverModal";
import { CheatModal } from "./src/components/CheatModal";
import { InstructionModal } from "./src/components/InstructionModal";

export default function App() {
	const [startGame, setStartGame] = useState(false);
	const [randomNumber, setRandomNumber] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [attempts, setAttempts] = useState(0);
	const [range, setRange] = useState({ min: 1, max: 99 });
	const [guessedNumber, setGuessedNumber] = useState("");
	const [isCheated, setIsCheated] = useState(false);
	const [showInstruction, setShowInstruction] = useState(false);

	useEffect(() => {
		if (startGame) {
			checkGameOver();
		}
	}, [randomNumber]);

	useEffect(() => {
		console.log("enter");
		generateRandomNumber(range.min, range.max);
		console.log({ max: range.max, randomNumber: randomNumber });
		console.log({ min: range.min, randomNumber: randomNumber });
	}, [range.max, range.min]);

	const checkGameOver = () => {
		setAttempts((prev) => prev + 1);
		if (guessedNumber == randomNumber) {
			setGameOver(true);
		}
	};

	const generateRandomNumber = (min, max) => {
		const temp = Math.floor(Math.random() * (max - min + 1)) + min;
		if (temp == randomNumber) {
			generateRandomNumber(min, max);
			return;
		}
		setRandomNumber(temp);
	};

	const handleGuessedNumber = (number) => {
		if (number != "" && (number > 99 || number < 1)) {
			alert("Please enter number between 1-99");
			return;
		}
		setGuessedNumber(number);
	};

	const handleStart = () => {
		setStartGame(true);
		generateRandomNumber(range.min, range.max);
	};

	const handleHigherNumber = (randomNumber) => {
		let temp = randomNumber;
		if (randomNumber < guessedNumber) {
			setIsCheated(true);
			return;
		}

		setRange((prev) => {
			if (randomNumber == range.max) {
				temp = range.max - 1;
			} else {
				temp = prev.max > randomNumber ? randomNumber : prev.max;
			}
			const obj = {
				min: prev.min,
				max: temp,
			};
			return obj;
		});
	};
	const handleLowerNumber = (randomNumber) => {
		if (randomNumber > guessedNumber) {
			setIsCheated(true);
			return;
		}
		let temp = randomNumber;
		setRange((prev) => {
			if (prev.min == randomNumber) {
				temp = prev.min + 1;
			} else {
				temp = prev.min > randomNumber ? prev.min : randomNumber;
			}
			const obj = {
				...prev,
				min: temp,
			};
			return obj;
		});
	};

	const handleReset = () => {
		setRange({ min: 1, max: 99 });
		setStartGame(false);
		setGuessedNumber("");
		setRandomNumber(0);
		setGameOver(false);
		setAttempts(0);
	};

	const handleInputReset = () => {
		setGuessedNumber("");
	};

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.container}>
				<StartModal
					guessedNumber={guessedNumber}
					handleGuessedNumber={handleGuessedNumber}
					handleInputReset={handleInputReset}
					handleStart={handleStart}
					startGame={startGame}
					range={range}
				/>
				<View style={styles.screen2}>
					<Text style={styles.basicStyle}>Picked Number : {guessedNumber}</Text>
					<Text style={styles.basicStyle}>Random Number: {randomNumber}</Text>
					<View style={styles.buttonContainer}>
						<Button
							title="Lower Number (-)"
							onPress={() => handleLowerNumber(randomNumber)}
						/>
						<Button
							title="Higher Number (+)"
							onPress={() => handleHigherNumber(randomNumber)}
						/>
					</View>
					<View style={styles.instructionButtonWrapper}>
						<Button
							color="#00BCD4"
							title="Show Instructions"
							onPress={() => setShowInstruction(true)}
						/>
					</View>
					<CheatModal cheat={isCheated} setCheat={setIsCheated} />
					<InstructionModal
						showInstruction={showInstruction}
						setShowInstruction={setShowInstruction}
					/>
				</View>
				<GameOverModal
					gameOver={gameOver}
					attempts={attempts}
					guessedNumber={guessedNumber}
					handleReset={handleReset}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		gap: 20,
		marginTop: 20,
	},
	screen2: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
		width: "100%",
	},
	basicStyle: {
		fontSize: 20,
		padding: 10,
		color: "white",
	},
	instructionButtonWrapper: {
		marginTop: 50,
	},
});
