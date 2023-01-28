import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";


function MealDetailScreen({ route, navigation }) {
	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);

	function headerButtonPressHandler() {
		console.log("pressed");
	}
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						color="white"
						icon="star"
						onPress={headerButtonPressHandler}
					/>
				);
			},
		});
	}, [navigation, headerButtonPressHandler]);
	return (
		<ScrollView style={styles.rootContainer}>
			<Image
				style={styles.image}
				source={{ uri: selectedMeal.imageUrl }}
			></Image>
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
				textStyle={styles.detailText}
			></MealDetails>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients}></List>
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps}></List>
				</View>
			</View>
		</ScrollView>
	);
}
export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContainer: { marginBottom: 26 },
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "white",
	},
	detailText: {
		color: "white",
	},
	listContainer: { width: "80%" },
	listOuterContainer: { alignItems: "center" },
});
