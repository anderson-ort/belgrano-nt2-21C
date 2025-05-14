

export const getAllRecetas = async () => {
    const res = await fetch("../../../db/recetas_nutrition_studies.json")
    const data = await res.json()
    
    return data

}