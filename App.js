import React from "react";
import { StyleSheet, View } from "react-native";
import { Image as MotiImage } from "moti";

export default function App() {
	return (
		<View style={styles.container}>
			<MotiImage
				style={{
					width: 227,
					height: 200,
				}}
				from={{
					rotate: "0deg",
				}}
				animate={{
					rotate: "360deg",
				}}
				transition={{
					loop: true,
					repeatReverse: false,
					type: "timing",
					duration: 3000,
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
