import { Stack } from "expo-router";

export default function RecetasLayout() {
    return (
        <Stack
            options={{ title: "Recetas" }}
            screenOptions={{
                headerShown: false,
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "#fff",
                },
                headerTintColor: "#000",
                headerShadowVisible: false,
            }}
        />
    );
}
