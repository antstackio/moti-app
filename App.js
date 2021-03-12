import React from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

export default function App() {
	const [spinValue, setSpinValue] = React.useState(new Animated.Value(0));

	React.useEffect(() => {
		runAnimationFn();
	}, []);

	const runAnimationFn = () => {
		Animated.loop(
			Animated.timing(spinValue, {
				toValue: 1,
				duration: 3000,
				easing: Easing.linear,
				useNativeDriver: false,
			})
		).start();
	};

	const spin = spinValue.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "360deg"],
	});
	return (
		<View style={styles.container}>
			<Animated.Image
				style={{
					width: 227,
					height: 200,
					transform: [{ rotate: spin }],
				}}
				source={require("./assets/reactjs.png")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
