import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header(props) {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerText}>Guess My Number</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		height: "10%",
		width: "100%",
		backgroundColor: "#fc035e",
		padding: 10,
		marginVertical: 40,
		justifyContent: "center",
	},
	headerText: {
		fontSize: 24,
		color: "#fff",
	},
});
