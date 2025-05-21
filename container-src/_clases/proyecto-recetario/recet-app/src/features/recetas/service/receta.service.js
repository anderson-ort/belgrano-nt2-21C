import { supabase } from "../../../auth/supabase.auth"


export const getAllRecetas = async () => {
    // const res = await fetch("../../../db/recetas_nutrition_studies.json")
    // const data = await res.json()

    // return data

    let { data: recipes, error } = await supabase
        .from('recipes')
        .select('*')

    return recipes
}


export const getRecetaById = async (id) => {
    let { data, error } = await supabase.from('recipes').select("*").eq('id', id).single()
 
    return data
}