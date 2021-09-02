import React from "react";
import {
	StyleSheet,
	TextInput,
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

import { Button } from "react-native-paper";

export default function NumberScreen(props) {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.numberScreenContainer}>
				<Text style={{ marginVertical: 40 }}>Enter a Number</Text>
				<TextInput
					style={styles.numberInput}
					keyboardType="number-pad"
					defaultValue={props.inputNumber}
					onChangeText={(enteredNumber) =>
						props.onSetInputNumber(enteredNumber)
					}
					maxLength={2}
				/>
				<View style={styles.buttonContainer}>
					<View style={{ width: "45%" }}>
						<Button
							icon="refresh"
							mode="outlined"
							onPress={props.onReset}
							color="#fc035e"
							style={styles.screenBtns}
						>
							Reset
						</Button>
					</View>
					<View style={{ width: "45%" }}>
						<Button
							icon="check"
							mode="contained"
							onPress={props.onConfirm}
							color="#00d165"
							style={styles.screenBtns}
						>
							Confirm
						</Button>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	numberScreenContainer: {
		paddingVertical: 40,
		width: "60%",
		height: "30%",
		alignItems: "center",
		justifyContent: "center",
	},
	numberInput: {
		textAlign: "center",
		borderWidth: 1,
		borderStyle: "dotted",
		borderColor: "#999",
		borderRadius: 5,
		width: "100%",
		height: 100,
		fontSize: 30,
	},
	buttonContainer: {
		width: "100%",
		marginVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	screenBtns: {
		color: "#fff",
	},
});
