import { FlatList } from "react-native";
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
		<FlatList
			data={CATEGOREIS}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
		></FlatList>
	);
}
export default CategoriesScreen;
