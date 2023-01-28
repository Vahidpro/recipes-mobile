import { StyleSheet, View, Text } from "react-native";

function List({ data }) {
	return data.map((dataPoint) => (
		<View style={styles.ListItem} key={dataPoint}>
			<Text style={styles.itemText}>{dataPoint}</Text>
		</View>
	));
}
export default List;

const styles = StyleSheet.create({
	ListItem: {
		borderRadius: 25,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: "#d17c7cff",
	},
	itemText: {
		color: "#1f0404ff",
		textAlign: "center",
	},
});
