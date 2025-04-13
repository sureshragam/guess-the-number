import { View, Text, Modal, StyleSheet, Button } from "react-native";

export const InstructionModal = (props) => {
	const { showInstruction, setShowInstruction } = props;
	return (
		<Modal visible={showInstruction} animationType="slide">
			<View style={styles.instructionModal}>
				<Text style={[styles.basicStyle, styles.title]}>
					Welcome to the Number Guessing Game!
				</Text>
				<Text style={styles.basicStyle}>
					🎯 Pick a secret number between 1 and 99 and enter it in the input
					box.
				</Text>
				<Text style={styles.basicStyle}>
					Click Start to begin the game. The bot will try to guess your number
					by showing a number on screen.
				</Text>
				<Text style={styles.basicStyle}>
					You need to help the bot 🤖 by clicking:
				</Text>
				<View style={{ paddingLeft: 10 }}>
					<Text style={styles.basicStyle}>
						🔼 Higher Number(+) if the bot's guess is higher than your number.
					</Text>
					<Text style={styles.basicStyle}>
						🔽 Lower Number(-) if the bot's guess is lower than your number.
					</Text>
				</View>

				<Text style={styles.basicStyle}>
					The bot will adjust and try again based on your input until it finds
					your number.
				</Text>
				<Text style={styles.basicStyle}>
					💡 Be honest! If your hints don't match your number, the game will
					catch you cheating 😅
				</Text>
				<View style={{ marginHorizontal: "auto", marginVertical: 30 }}>
					<Button
						title="Lets Get Started!!!!!!"
						onPress={() => setShowInstruction(false)}
					/>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	instructionModal: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "black",
		alignItems: "flex-start",
		padding: 10,
	},
	basicStyle: {
		color: "white",
		fontSize: 16,
		padding: 8,
		textAlign: "left",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "red",
		textAlign: "center",
	},
});
