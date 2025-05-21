import React from 'react'
import { useUserStorage } from '../../stores/useUserStorage'

import styles from "./AddFav.module.css"

const AddFav = ({ id }) => {
    const normalizedId = Number(id)
    const { user, favoriteIds, addFavorite } = useUserStorage()

    const isFav = favoriteIds.includes(normalizedId)

    const handleToggleFav = () => { 
        addFavorite(normalizedId)
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