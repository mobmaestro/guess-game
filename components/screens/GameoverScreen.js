import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { List, Button } from "react-native-paper";
export default function GameoverScreen(props) {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.endText}>
					Computer Took {props.numberOfAttempts} Guesses.
				</Text>
				<View style={styles.newBtnContainer}>
					<Button
						color="#fc035e"
						mode="contained"
						icon="refresh"
						onPress={props.onStartNewGame}
					>
						Start New Game
					</Button>
				</View>
				<Image
					resizeMode="cover"
					style={styles.image}
					source={require("../../assets/original.jpg")}
				/>
				<Text style={{ marginVertical: 15, fontSize: 20 }}>
					Computer's Guesses
				</Text>
				<View style={styles.listContainer}>
					{props.guesses.map((guess, index) =>
						index !== props.guesses.length - 1 ? (
							<List.Item
								key={index}
								style={styles.listItem}
								titleStyle={styles.listTitle}
								title={guess}
								left={() => (
									<List.Icon icon="close-circle-outline" color="#fc035e" />
								)}
							/>
						) : (
							<List.Item
								key={index}
								style={styles.listItem}
								titleStyle={styles.listTitle}
								title={guess}
								left={() => <List.Icon icon="check-circle" color="#00d165" />}
							/>
						)
					)}
				</View>
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	endText: {
		textAlign: "center",
		fontSize: 30,
		fontWeight: "bold",
	},
	newBtnContainer: {
		marginVertical: 35,
		width: "70%",
	},
	image: {
		width: 300,
		height: 300,
		borderRadius: 150,
	},
	listContainer: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
	},
	listItem: {
		width: "50%",
	},
	listTitle: {
		fontSize: 22,
	},
});
