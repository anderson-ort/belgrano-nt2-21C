import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const createThreeButtonAlert = () =>
    Alert.alert('Hola', 'mundo!', [
      { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  return (
    <View style={styles.container}>
      <Text style={styles.innerText}>Hola mundo desde</Text>
      <Pressable onPress={createThreeButtonAlert}>
        <Text style={styles.innerText}> ORT</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#666"
  },
  innerText: {
    fontSize: 18,
    color:"white"
  },
});
