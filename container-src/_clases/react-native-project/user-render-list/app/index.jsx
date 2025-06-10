import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const UserApp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.iconContainer}>
                    <Image
                        style={styles.featureIcon}
                        source={require("../assets/images/chile.png")}
                        resizeMode="contain"
                    />
                </View>

                <Text style={styles.title}>Proto Recet-App</Text>

                <Text style={styles.description}>
                    Un breve ejemplo de React Native consumiendo datos desde una
                    API externa
                </Text>

                <View style={styles.navBtns}>
                    <Link href="/about" style={styles.button}>
                        <Text style={styles.buttonText}>About</Text>
                    </Link>
                    <Link href="/(recetas)" style={styles.button}>
                        <Text style={styles.buttonText}>Recetas</Text>
                    </Link>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Ort Expo react Native con Andru
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f172a",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: "#1e293b",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        width: "100%",
        maxWidth: 350,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 15,
        borderWidth: 1,
        borderColor: "#334155",
    },
    iconContainer: {
        // backgroundColor: "transparent",
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,

        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    featureIcon: {
        width: 60,
        height: 60,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#f8fafc",
        textAlign: "center",
        marginBottom: 15,
        letterSpacing: 0.5,
    },
    description: {
        fontSize: 16,
        color: "#cbd5e1",
        textAlign: "center",
        lineHeight: 24,
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    navBtns:{
        flexDirection: "row",
        gap:20
    },
    button: {
        backgroundColor: "#666",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 12,
        shadowColor: "#3b82f6",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
    },
    footer: {
        position: "absolute",
        bottom: 40,
    },
    footerText: {
        fontSize: 14,
        color: "#64748b",
        fontStyle: "italic",
    },
});

export default UserApp;
