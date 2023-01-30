import { useNavigation } from "@react-navigation/native";
import {
	StyleSheet,
	View,
	Text,
	Pressable,
	Image,
	Platform,
} from "react-native";
import MealDetails from "../MealDetails";

function mealItem({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) {
	const navigation = useNavigation();
	const selectMealItemHandler = () => {
		navigation.navigate("MealDetail", { mealId: id });
	};
	return (
		<View style={styles.container}>
			<Pressable
				onPress={selectMealItemHandler}
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : "null",
				]}
			>
				<View>
					<Image style={styles.image} source={{ uri: imageUrl }}></Image>
					<Text style={styles.title}>{title}</Text>
					<View>
						<MealDetails
							duration={duration}
							complexity={complexity}
							affordability={affordability}
						></MealDetails>
					</View>
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

	buttonPressed: { opacity: 0.7 },
});
