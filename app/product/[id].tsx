import { router, Stack, useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";

export default function Screen() {

    const {id} = useLocalSearchParams();
    const idProduct = parseInt(id as string);

    const product = getProductById(idProduct);
    if(!idProduct) return router.back();

    const handleBuyButton = () => {
        alert("Você clicou no item " + product?.id)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: '' }} />
            <ScrollView style={styles.area}>
                <Image 
                    style={styles.img}
                    source={{uri: product?.image}}
                    resizeMode="cover"
                />
                <Text style={styles.title}>{product?.title}</Text>
                <Text style={styles.description}>{product?.description}</Text>
                <View style={styles.priceArea}>
                    <Text style={styles.price}>R$ {product?.price.toFixed(2)}</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonArea}>
                <Button
                    onPress={handleBuyButton}
                    title="Comprar Agora"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    area: {
        flex: 1,
        padding: 10,
    },
    buttonArea: {
        padding: 10,
        marginBottom: StatusBar.currentHeight || 0,
    },
    img: {
        width: "100%",
        height: 250,
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 29,
        fontWeight: "bold",
        marginBottom: 10
    },
    description: {
        fontSize: 15,
        color: "#555555",
        marginBottom: 20
    },
    priceArea: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#ccc"
    },
    price: {
        fontSize: 22,
        textAlign: "center"
    }
});