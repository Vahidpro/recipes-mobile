import { StyleSheet, View, Text } from "react-native";

function Subtitle({ children }) {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
}
export default Subtitle;

const styles = StyleSheet.create({
	subtitle: {
		color: "#f79595",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
	subtitleContainer: {
		marginVertical: 6,
		padding: 6,
		borderBottomColor: "#e68181",
		borderBottomWidth: 2,
		marginHorizontal: 100,
	},
});
