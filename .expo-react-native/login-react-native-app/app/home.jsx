import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useEffect } from 'react'

const logo = require("../assets/chile.png")


const Home = ({ navigation }) => {

    const bounceAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(bounceAnim, {
                    toValue: -10,
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(bounceAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false,
                }),
            ])
        ).start();
    }, []);



    return (
        <View style={styles.container}>

            <Animated.Image
                source={logo}
                style={[
                    styles.logoImg,
                    {
                        transform: [{ translateY: bounceAnim }],
                    },
                ]}
            />


            <Text style={styles?.description}>
                Bienvenido a nuestra app. Tu vida, más simple, más conectada. Lorem ipsum dolor sit amet...
            </Text>

            <TouchableOpacity
                style={styles?.button}
                onPress={() => {
                    console.log(navigation)
                    navigation.navigate('Profile', { name: 'Jane' })
                }
                }
            >
                <Text style={styles.buttonText}>Iniciar sesión | Registrarse</Text>
            </TouchableOpacity>
        </View >
    );
}



export default Home


const container = {
    flex: 1,
    backgroundColor: '#122',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
}

const logoImg = {
    width: 100,
    height: 100,
    marginBottom: 40,
    resizeMode: 'contain',
}

const description = {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
}


const button = {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
}

const buttonText = {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
}


const styles = StyleSheet.create({
    container,
    logoImg,
    description,
    button,
    buttonText
})