import { Modal, View, Text, Button, StyleSheet } from "react-native";

export const GameOverModal = (props) => {
	const { gameOver, attempts, guessedNumber, handleReset } = props;
	return (
		<Modal visible={gameOver} animationType="slide">
			<View style={styles.completedScreen}>
				<Text style={[styles.basicStyle, styles.gameOverTitle]}>Game Over</Text>
				<Text style={styles.basicStyle}>Number of Attempts: {attempts}</Text>
				<Text style={styles.basicStyle}>Actual Number: {guessedNumber}</Text>
				<Button title="Start Again" onPress={handleReset} />
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	completedScreen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
	},
	basicStyle: {
		color: "white",
		fontSize: 20,
		padding: 10,
	},
	gameOverTitle: {
		fontSize: 30,
		textAlign: "center",
		fontWeight: "bold",
		color: "red",
	},
});
