import { useEffect } from 'react'
import styles from './Profile.module.css'
import RecetaItem from '../../recetas/pages/RecetaItem'
import { useUserStorage } from '../../../stores/useUserStorage'

const Profile = () => {
  const {
    user,
    favoriteIds,
    favoriteRecetas,
    loadFavoriteRecetas
  } = useUserStorage()

  useEffect(() => {
    if (user && favoriteIds.length > 0 && favoriteRecetas.length === 0) {

      loadFavoriteRecetas()
    }
  }, [user, favoriteIds])

  if (!user) return <p>Debes iniciar sesión para ver tu perfil.</p>

  return (
    <div className={styles.profileContainer}>
      <h2>Mi Perfil</h2>
      <div className={styles.profileInfo}>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Total favoritas:</strong> {favoriteRecetas.length}</p>

        <h3>⭐ Mis recetas favoritas</h3>
        <div className={styles.recipeGrid}>
          {favoriteRecetas.map((receta) => (
            <RecetaItem key={receta.id} {...receta} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile