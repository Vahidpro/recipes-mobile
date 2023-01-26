import {
	StyleSheet,
	View,
	Text,
	Pressable,
	Image,
	Platform,
} from "react-native";

function mealItem({ title, imageUrl, duration, complexity, affordability }) {
	return (
		<View style={styles.container}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : "null",
				]}
			>
				<View>
					<Image style={styles.image} source={{ uri: imageUrl }}></Image>
					<Text style={styles.title}>{title}</Text>
				</View>
				<View style={styles.details}>
					<Text style={styles.detailItem}>{duration}m</Text>
					<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
					<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
				</View>
			</Pressable>
		</View>
	);
}
export default mealItem;

const styles = StyleSheet.create({
	container: {
		margin: 16,
		backgroundColor: "white",
		borderRadius: 25,
		overflow: "hidden",
		elevation: 10,
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 20,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},
	details: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 8,
	},
	detailItem: {
		fontSize: 12,
		marginHorizontal: 4,
	},
	buttonPressed: { opacity: 0.7 },
});
