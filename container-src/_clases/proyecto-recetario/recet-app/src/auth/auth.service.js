import { loadUserData } from "../features/user/service/user.service"
import { supabase } from "./supabaseAuth"

export const signIn = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return await loadUserData({ isSignUp: false })

}

export const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return await loadUserData({ isSignUp: true, user: data.user });
};


export const signOut = async () => {
    await supabase.auth.signOut();
    useUserStore.getState().reset();
};