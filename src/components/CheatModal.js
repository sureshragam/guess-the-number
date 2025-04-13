import { Modal, StyleSheet, View, Text } from "react-native";
import { useEffect } from "react";
export const CheatModal = (props) => {
	const { cheat, setCheat } = props;

	useEffect(() => {
		const timer = setTimeout(() => {
			setCheat(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, [cheat]);

	return (
		<Modal visible={cheat} animationType="fade">
			<View style={styles.cheatModal}>
				<Text style={styles.basicStyle}>Cheating !!</Text>
				<Text style={styles.basicStyle}>You know You are Cheating!!!</Text>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	cheatModal: {
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
});
