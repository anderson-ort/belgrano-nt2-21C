import { supabase } from "../../../auth/supabaseAuth"
import useUserStore from "../../../stores/useUserStore"


export const getAllRecetas = async () => {
    const { data } = await supabase.from("recipes").select("*")
    return data

}

export const getRecipeById = async (id) => {

    const { data } = await supabase.from("recipes").select("*").eq('id', id)
    const receta = data[0]
    return receta
}


export const deleteRecetaById = async (userId, recipeId) => {
    const { data, error } = await supabase
        .from("favorites")
        .delete()
        .eq("user_id", userId)
        .eq("recipe_id", recipeId)
        .single();

    if (error) throw error;
    return { data, error };
};



// Obtener muchas recetas por lista de IDs
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