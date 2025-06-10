import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ title: "UserApp", headerShown: false }}
            />
            <Stack.Screen
                name="about"
                options={{
                    title: "About",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "#25292e",
                    },
                    headerTintColor: "#fff",
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen name="(recetas)" options={{title:"recetas"}}/>
        </Stack>
    );
};

export default RootLayout;
