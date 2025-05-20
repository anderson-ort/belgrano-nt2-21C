import { supabase } from "../../../auth/supabaseAuth"
import useUserStore from "../../../stores/useUserStore"

export const loadUserData = async ({ isSignUp = false, user = null } = {}) => {
    const store = useUserStore.getState()

    // 1. Si es un nuevo usuario (signUp), seteamos user y limpiamos favoritos
    if (isSignUp) {
        const { data, error } = await supabase.auth.getUser()
        if (error || !data?.user) {
            throw new Error("No se pudo obtener el usuario recién registrado.")
        }

        store.setUser(data.user)
        store.setFavorites([])
        store.setFavoriteRecetas([])

        return {
            message: "¡Bienvenido! Solo tenés que validar tu email.",
            favoriteIds: [],
            user: data.user
        }
    }

    // 2. Buscar user actual si no se pasa explícitamente
    let currentUser = user

    if (!currentUser) {
        const { data, error } = await supabase.auth.getUser()
        if (error || !data?.user) {
            throw new Error("No se pudo obtener el usuario actual.")
        }
        currentUser = data.user
    }

    // 3. Setear user en el store
    store.setUser(currentUser)

    // 4. Traer favoritos desde Supabase
    const { data: favs, error: favsError } = await supabase
        .from("favorites")
        .select("recipe_id")
        .eq("user_id", currentUser.id)

    if (favsError) {
        console.error("Error al traer favoritos:", favsError.message)
        throw new Error("No se pudieron cargar las recetas favoritas")
    }

    const favoriteIds = favs.map((f) => f.recipe_id)
    store.setFavorites(favoriteIds)

    // 5. Traer recetas completas si hay favoritos
    if (favoriteIds.length > 0) {
        await store.loadFavoriteRecetas()
    } else {
        store.setFavoriteRecetas([])
    }

    return {
        message: `¡Hola ${currentUser.email}! Se cargaron tus recetas favoritas.`,
        favoriteIds,
        user: currentUser
    }
}
