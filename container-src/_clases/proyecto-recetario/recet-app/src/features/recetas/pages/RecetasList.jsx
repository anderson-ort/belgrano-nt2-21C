import { useEffect, useState } from 'react'
import { getAllRecetas } from '../service/receta.service'
import RecetaItem from './RecetaItem'
import "./RecetasList.css"
import Loader from '../../../components/Loader/Loader'
const RecetasList = () => {
  const [recetas, setRecetas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const data = await getAllRecetas()
        setRecetas(data)
      } catch (err) {
        console.error('Error al obtener recetas:', err)
        setError('No se pudieron cargar las recetas')
      } finally {
        setLoading(false)
      }
    }

    fetchRecetas()
  }, [])

  if (loading) return <Loader />
  if (error) return <p>{error}</p>
  if (recetas.length === 0) return <p>No hay recetas disponibles.</p>

  return (
    <div className='RecetasGrid'>
      {recetas.map((receta) => (
        <RecetaItem
          key={receta.id}
          id={receta.id}
          nombre={receta.nombre}
          imagen={receta.imagen}
          puntuacion={receta.puntuacion}
          descripcion={receta.descripcion}
        />
      ))}
    </div>
  )
}

export default RecetasList
