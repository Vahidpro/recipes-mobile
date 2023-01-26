import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress, navigation }) {
	return (
		<View style={styles.gridItem}>
			<Pressable
				android_ripple={{ color: "red" }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : "null",
				]}
				onPress={onPress}
			>
				<View style={[styles.innerContainer, { backgroundColor: color }]}>
					<Text style={styles.titleText}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
}
export default CategoryGridTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		elevation: 4,
		backgroundColor: "white",
		borderRadius: 25,

		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 25,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	button: { flex: 1 },
	buttonPressed: { opacity: 0.5 },
	innerContainer: {
		borderRadius: 25,
		flex: 1,
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
	},
	titleText: { fontWeight: "bold", fontSize: 20 },
});
