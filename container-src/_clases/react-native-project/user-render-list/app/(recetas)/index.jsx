import { View } from "react-native-web";
import { RecetaCard } from "../../components/RecetaCard";
import { useRecetas } from "../../hooks/useRecetas";
import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native";

export default function Recetas() {
    const { recetas, loading, error } = useRecetas();

    if (loading) return <ActivityIndicator style={{ marginTop: 40 }} />;
    if (error)
        return <Text style={{ color: "red", padding: 16 }}>{error}</Text>;

    return (
        <SafeAreaView>
            <FlatList
                data={recetas}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingVertical: 10 }}
                renderItem={({ item }) => (
                    <RecetaCard
                        nombre={item.nombre_receta}
                        slug={item.slug}
                        votacion={item.votacion}
                    />
                )}
            />
        </SafeAreaView>
    );
}

