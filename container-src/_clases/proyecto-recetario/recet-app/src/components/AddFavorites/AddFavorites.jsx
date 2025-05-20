import { useState } from "react"
import useUserStore from "../../stores/useUserStore"
import { supabase } from "../../auth/supabaseAuth"

import styles from "./AddFavorites.module.css"
import { deleteRecetaById } from "../../features/recetas/service/receta.service"

const AddFavorites = ({ id }) => {
    const idNumeric = Number(id)
    const { user, favoriteIds, addFavorite, removeFavorite } = useUserStore()
    const [favStatus, setFavStatus] = useState(null)

    const isFavorite = favoriteIds.includes(idNumeric)

    const handleToggleFav = async () => {
        try {
            if (isFavorite) {

                const { error } = await deleteRecetaById(user.id, idNumeric)
                if (error) throw error
                removeFavorite(idNumeric)
                setFavStatus("Eliminada de favoritos ❌")
            } else {
                // Agregar a favoritos
                const { error } = await supabase.from("favorites").insert([
                    {
                        user_id: user.id,
                        recipe_id: idNumeric,
                    },
                ])

                if (error) throw error

                addFavorite(idNumeric)
                setFavStatus("Agregada a favoritos ✅")
            }
        } catch (err) {
            console.error(err)
            setFavStatus("Ocurrió un error al actualizar favoritos.")
        }
    }

    if (!user) return null

    return (
        <>
            <button className={styles.favBtn} onClick={handleToggleFav}>
                {isFavorite ? "En favoritos" : "A favoritos ❤️"}
            </button>

            {favStatus && <p className={styles.favStatus}>{favStatus}</p>}
        </>
    )
}

export default AddFavorites
