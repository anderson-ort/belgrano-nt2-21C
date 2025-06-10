import { supabase } from "../../../auth/supabase.auth"


export const getAllRecetas = async () => {
    let { data: recipes, error } = await supabase
        .from('recipes')
        .select('*')

    return recipes
}


export const getRecetaById = async (id) => {
    let { data, error } = await supabase.from('recipes').select("*").eq('id', id).single()
    return data
}


export const fetchAllRecetasById = async (ids) => {
    if (!ids || ids.length === 0) return []

    const { data, error } = await supabase
        .from("recipes")
        .select("*")
        .in("id", ids)

    if (error) {
        console.error("Error al obtener recetas por IDs:", error)
        throw error
    }

    return data
}