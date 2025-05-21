import { supabase } from "./supabase.auth"

export const signIn = async (email, password) => {
    const { data: user, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw Error(error.message)
    return user
}