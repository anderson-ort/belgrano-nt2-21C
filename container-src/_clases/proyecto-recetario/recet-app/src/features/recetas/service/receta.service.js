

export const getAllRecetas = async () => {
    const res = await fetch("/db/recetas_nutrition_studies.json")
    const data = await res.json()

    return data

}

export const getRecipeById = async (id) => {
    const res = await fetch("/db/recetas_nutrition_studies.json")
    const data = await res.json()

    const receta = data.find((r) => String(r.id) === String(id)) // aseguramos comparación tipo string
    if (!receta) throw new Error("Receta no encontrada")
    return receta
}