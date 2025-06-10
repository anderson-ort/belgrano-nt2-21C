import { supabase } from "./supabase.auth"

export const signIn = async (email, password) => {
    const { data: user, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw Error(error.message)
    return user
}

export const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email, password
    })

    if (error) throw Error(error.message)

    return data
}