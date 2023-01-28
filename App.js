import { StatusBar, StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<View style={styles.container}>
			<StatusBar style="light"></StatusBar>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: "#ff008c" },
						contentStyle: { backgroundColor: "#111111" },
					}}
				>
					<Stack.Screen
						name="MealsCategories"
						component={CategoriesScreen}
						options={{
							title: "All Categories",
						}}
					></Stack.Screen>
					<Stack.Screen
						name="MealsOverview"
						component={MealsOverviewScreen}
						// options={({ route, navigation }) => {
						// 	const catId = route.params.categoryId;
						// 	return {
						// 		title: catId,
						// 	};
						// }}
					></Stack.Screen>
					<Stack.Screen
						name="MealDetail"
						component={MealDetailScreen}
					></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0c0c0c",
	},
});
