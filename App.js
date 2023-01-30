import { StatusBar, StyleSheet, View, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavoriteContextProvider from "./store/context/fovorite-context";

export default function App() {
	const Stack = createNativeStackNavigator();
	const Drawer = createDrawerNavigator();

	function MyDrawer() {
		return (
			<Drawer.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: "#ff008c" },
					sceneContainerStyle: { backgroundColor: "#111111" },
					drawerContentStyle: { backgroundColor: "#11000a" },
					drawerInactiveTintColor: "white",
				}}
			>
				<Drawer.Screen
					name="Categories"
					component={CategoriesScreen}
					options={{
						drawerIcon: ({ color, size }) => (
							<Ionicons size={size} color={color} name="list" />
						),
					}}
				></Drawer.Screen>
				<Drawer.Screen
					name="Favorites"
					component={FavoritesScreen}
					options={{
						drawerIcon: ({ color, size }) => (
							<Ionicons size={size} color={color} name="star" />
						),
					}}
				></Drawer.Screen>
			</Drawer.Navigator>
		);
	}

	return (
		<View style={styles.container}>
			<StatusBar style="light"></StatusBar>
			<FavoriteContextProvider>
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
			</FavoriteContextProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0c0c0c",
	},
});
