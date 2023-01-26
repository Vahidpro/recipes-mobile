import { FlatList, StyleSheet, View } from "react-native";
import { CATEGOREIS } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
	return (
		<CategoryGridTile
			title={itemData.item.title}
			color={itemData.item.color}
		></CategoryGridTile>
	);
}
function CategoriesScreen() {
	return (
		<View style={styles.container}>
			<FlatList
				// style={styles.flatList}
				data={CATEGOREIS}
				keyExtractor={(item) => item.id}
				renderItem={renderCategoryItem}
				horizontal={false}
				numColumns={2}
			></FlatList>
		</View>
	);
}
export default CategoriesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
