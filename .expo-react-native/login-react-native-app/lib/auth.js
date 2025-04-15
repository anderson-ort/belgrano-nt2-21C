import * as SecureStore from 'expo-secure-store'
import users from './users.json'

const loginWithEmail = async ({ email, password }) => {
    const user = users.find(
        user => user.email.toLowerCase() === email.toLowerCase() && user.password === password
    )

    if (!user) throw new Error("No es valido el usuario");

    // Simular "token"
    const fakeToken = `${user.email}-token`;
    await SecureStore.setItemAsync('token', fakeToken);
    return fakeToken;
}


const logOut = async () => await SecureStore.deleteItemAsync('token')


export { loginWithEmail, logOut }