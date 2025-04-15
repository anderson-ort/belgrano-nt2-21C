import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "./profile"
import Home from "./home"

const Stack = createNativeStackNavigator();

const LandingPageApp = () => {
  return (

    // <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}

      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />

    </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default LandingPageApp 