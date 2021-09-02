import React, { useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Header from "./components/Header";
import ComputerGuessScreen from "./components/screens/ComputerGuessScreen";
import GameoverScreen from "./components/screens/GameoverScreen";
import NumberScreen from "./components/screens/NumberScreen";

const generateRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

export default function App() {
	const [inputNumber, setInputNumber] = useState();
	const [guessedNumber, setGuessedNumber] = useState(
		generateRandomNumber(1, 100)
	);
	const [screenType, setScreenType] = useState("startScreen");
	const [attempts, setAttempts] = useState(1);
	const [guesses, setGuesses] = useState([]);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	//Handler for Confirmation
	const handleConfirm = () => {
		if (+inputNumber < 0 || isNaN(+inputNumber)) {
			Alert.alert("Invalid Number", "Entered Value is not a Number", [
				{ text: "OK", style: "destructive", onPress: () => setInputNumber() },
			]);
			return;
		}
		setScreenType("guessScreen");
	};

	//Handle Game Over
	const handleGameOver = () => {
		setScreenType("gameOverScreen");
	};

	//Handler for New Game
	const handleStartNewGame = () => {
		setScreenType("startScreen");
		currentLow.current = 1;
		currentHigh.current = 100;
		setAttempts(1);
		setInputNumber();
	};

	//Handler for store computer guesses
	const handleStoreGuess = () => {
		setGuesses((oldGuess) => [...oldGuess, guessedNumber]);
	};

	//Handler for generating Lower Random Number
	const handleGenerateLower = (direction) => {
		if (validateDirection(direction)) {
			setAttempts(attempts + 1);
			currentHigh.current = guessedNumber;
			setGuessedNumber(generateRandomNumber(currentLow.current, guessedNumber));
		} else {
			Alert.alert("Wrong Direction! ", "You cannot Cheat", [{ text: "Ah!" }]);
		}
	};

	//Handler for generating Higher Random Number
	const handleGenerateHigher = (direction) => {
		if (validateDirection(direction)) {
			setAttempts(attempts + 1);
			currentLow.current = guessedNumber;
			setGuessedNumber(
				generateRandomNumber(guessedNumber + 1, currentHigh.current)
			);
		} else {
			Alert.alert("Wrong Direction! ", "You cannot Cheat", [{ text: "Ah!" }]);
		}
	};

	//validate right direction
	const validateDirection = (direction) => {
		return (
			(direction === "lower" && guessedNumber > inputNumber) ||
			(direction === "higher" && guessedNumber < inputNumber)
		);
	};

	return (
		<PaperProvider>
			<View style={styles.container}>
				<Header />
				{screenType === "startScreen" ? (
					<NumberScreen
						inputNumber={inputNumber}
						onSetInputNumber={(enteredNumber) =>
							setInputNumber(enteredNumber.replace(/[^0-9]/g, ""))
						}
						onReset={() => setInputNumber()}
						onConfirm={() => handleConfirm()}
					/>
				) : screenType === "guessScreen" ? (
					<ComputerGuessScreen
						enteredNumber={inputNumber}
						guessedNumber={guessedNumber}
						onComputerGuess={handleStoreGuess}
						onGenerateLower={handleGenerateLower}
						onGenerateHigher={handleGenerateHigher}
						onGameOver={handleGameOver}
					/>
				) : screenType === "gameOverScreen" ? (
					<GameoverScreen
						numberOfAttempts={attempts}
						onStartNewGame={handleStartNewGame}
						guesses={guesses}
					/>
				) : null}
			</View>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
});
