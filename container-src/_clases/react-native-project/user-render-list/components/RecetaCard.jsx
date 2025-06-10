// components/RecetaCard.tsx
import { View, Text, StyleSheet } from "react-native";

export const RecetaCard = ({ nombre, slug, votacion }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={styles.slug}>{slug}</Text>
            <Text style={styles.votacion}>⭐ {votacion.toFixed(1)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#0f172a",
        margin: 10,
        padding: 16,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    nombre: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
    },
    slug: {
        fontSize: 14,
        color: "white",
        marginTop: 4,
    },
    votacion: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "500",
        color: "white",
    },
});
