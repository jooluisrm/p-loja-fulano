import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllCategory } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";

export default function Screen() {

    const categories = getAllCategory();

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryItem data={item} />}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        width: "100%",
        padding: 20,
    }
});