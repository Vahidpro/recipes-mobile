import { StatusBar, StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviwScreen";

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<View style={styles.container}>
			<StatusBar style="light"></StatusBar>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="MealsCategories"
						component={CategoriesScreen}
					></Stack.Screen>
					<Stack.Screen
						name="MealsOverview"
						component={MealsOverviewScreen}
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
