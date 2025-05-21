import { useEffect, useState } from 'react'
import { getAllRecetas } from '../service/receta.service'
import RecetaItem from './RecetaItem'

import styles from "./RecetasList.module.css"


const RecetasList = () => {

  const [recetas, setRecetas] = useState(null)

  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const data_recetas = await getAllRecetas()
        setRecetas(data_recetas)
      } catch (e) {
        console.error('Error al obtener recetas:', e)
      }

    }
    fetchRecetas()
  }, [])



  return (
    <div className={styles.RecetasGrid}>
      {recetas &&
        recetas.map(
          (receta) => <RecetaItem
            key={receta.id}
            id={receta.id}
            nombre={receta.nombre}
            imagen={receta.imagen}
            puntuacion={receta.puntuacion}
            descripcion={receta.descripcion}
          />
        )
      }

    </div>
  )
}

export default RecetasList