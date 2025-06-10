import React from 'react'
import { useUserStorage } from '../../stores/useUserStorage'

import styles from "./AddFav.module.css"

const AddFav = ({ id }) => {
    const normalizedId = Number(id)
    const { favoriteIds, addFavorite, removeFavorite } = useUserStorage()

    const isFav = favoriteIds.includes(normalizedId)

    const handleToggleFav = async () => {

        if (isFav) {

            await removeFavorite(normalizedId)
            return
        }

        await addFavorite(normalizedId)
        return
    }

    return (
        <>
            <button className={styles.favBtn} onClick={handleToggleFav}>
                {isFav ? "Ya lo tenemos" : "A guardar"}
            </button>

        </>
    )
}

export default AddFav