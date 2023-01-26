import { StyleSheet, View, Text, Pressable, Image } from "react-native";

function mealItem({ title, imageUrl, duration, complexity, affordability }) {
	return (
		<View style={styles.container}>
			<Pressable>
				<View>
					<Image style={styles.image} source={{ uri: imageUrl }}></Image>
					<Text style={styles.title}>{title}</Text>
				</View>
				<View>
					<Text>{duration}m</Text>
					<Text>{complexity.toUpperCase()}</Text>
					<Text>{affordability.toUpperCase()}</Text>
				</View>
			</Pressable>
		</View>
	);
}
export default mealItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 25,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
	},
});
