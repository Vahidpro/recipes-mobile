import { StatusBar, StyleSheet, View, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";

export default function App() {
	const Stack = createNativeStackNavigator();
	const Drawer = createDrawerNavigator();

	function MyDrawer() {
		return (
			<Drawer.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: "#ff008c" },
					sceneContainerStyle: { backgroundColor: "#111111" },
				}}
			>
				<Drawer.Screen
					name="Categories"
					component={CategoriesScreen}
				></Drawer.Screen>
				<Drawer.Screen
					name="Favorites"
					component={FavoritesScreen}
				></Drawer.Screen>
			</Drawer.Navigator>
		);
	}
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
						name="Drawer"
						component={MyDrawer}
						options={{
							headerShown: false,
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
