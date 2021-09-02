import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
export default function ComputerGuessScreen(props) {
	useEffect(() => {
		props.onComputerGuess();
		if (+props.guessedNumber === +props.enteredNumber) {
			props.onGameOver();
		}
	}, [props.guessedNumber]);

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 20, textAlign: "center" }}>
				Computer's Guess
			</Text>
			<Text style={styles.guessedNumber}>{props.guessedNumber}</Text>
			<View style={styles.btnContainer}>
				<View style={{ width: "45%" }}>
					<Button
						icon="arrow-down"
						mode="outlined"
						color="#fc035e"
						onPress={() => props.onGenerateLower("lower")}
					>
						Lower
					</Button>
				</View>
				<View style={{ width: "45%" }}>
					<Button
						icon="arrow-up"
						mode="contained"
						color="#00d165"
						onPress={() => props.onGenerateHigher("higher")}
					>
						Greater
					</Button>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		width: "60%",
	},
	guessedNumber: {
		fontSize: 34,
		textAlign: "center",
		paddingVertical: 25,
		height: 100,
		marginVertical: 20,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: "#fc035e",
	},

	btnContainer: {
		padding: 0,
		flexDirection: "row",
		justifyContent: "space-around",
	},
});
