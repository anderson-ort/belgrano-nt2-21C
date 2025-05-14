import { useEffect, useState } from 'react'
import { getAllRecetas } from '../service/receta.service'
import RecetaItem from './RecetaItem'

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
    <div>
      {recetas &&
        recetas.map(
          (r,i) => <RecetaItem key={i} nombre={r.nombre} />
        )
      }

    </div>
  )
}

export default RecetasList