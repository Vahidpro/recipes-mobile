import { StatusBar, StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="light"></StatusBar>
			<CategoriesScreen></CategoriesScreen>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0c0c0c",
	},
});
