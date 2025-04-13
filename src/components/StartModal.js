import { StyleSheet, Text, TextInput, View, Button, Modal } from "react-native";
import { InstructionModal } from "./InstructionModal";
import { useState } from "react";

export const StartModal = (props) => {
	const [showInstruction, setShowInstruction] = useState(false);
	const {
		guessedNumber,
		handleGuessedNumber,
		handleInputReset,
		handleStart,
		startGame,
		range,
	} = props;
	return (
		<Modal visible={!startGame} animationType="slide">
			<InstructionModal
				showInstruction={showInstruction}
				setShowInstruction={setShowInstruction}
			/>
			<View style={styles.screen1}>
				<View style={styles.col1}>
					<Text style={[styles.basicStyle, styles.h1]}>Guess Game</Text>
					<Text style={[styles.basicStyle, styles.h2]}>
						Enter number between {range.min} - {range.max}{" "}
					</Text>
				</View>
				<View style={styles.col2}>
					<View style={styles.instructionButtonWrapper}>
						<Button
							color="#00BCD4"
							title="Show Instructions"
							onPress={() => setShowInstruction(true)}
						/>
					</View>
					<View style={styles.inputbox}>
						<TextInput
							placeholder="Enter any number"
							style={styles.input}
							value={guessedNumber}
							onChangeText={handleGuessedNumber}
							keyboardType="number-pad"
							maxLength={2}
							placeholderTextColor={"white"}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<Button title="Reset" color={"red"} onPress={handleInputReset} />
						<Button
							disabled={guessedNumber == ""}
							title="Start"
							onPress={handleStart}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	basicStyle: {
		color: "white",
	},
	h1: {
		fontSize: 30,
		textAlign: "center",
	},
	h2: {
		fontSize: 20,
		color: "red",
		paddingTop: 10,
	},
	screen1: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "black",
		gap: 50,
	},
	col1: {
		marginTop: 100,
	},
	col2: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	inputbox: {
		borderWidth: 1,
		borderColor: "white",
		width: "80%",
		height: 40,
		borderRadius: 10,
	},
	input: {
		padding: 10,
		color: "white",
	},
	buttonContainer: {
		flexDirection: "row",
		gap: 20,
		marginTop: 20,
	},
	instructionButtonWrapper: {
		marginBottom: 30,
	},
});
