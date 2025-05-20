import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import './RecetaDetail.css'
import { getRecipeById } from '../../service/receta.service'

const RecipeDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [receta, setReceta] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getRecipeById(id)
                setReceta(data)
            } catch (err) {
                console.error(err)
                setError('No se pudo cargar la receta')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [id])

    const renderEstrellas = (puntos) => {
        const max = 5
        return '★'.repeat(puntos) + '☆'.repeat(max - puntos)
    }

    if (loading) return <p>Cargando receta...</p>
    if (error) return <p>{error}</p>
    if (!receta) return <p>No se encontró la receta.</p>

    return (
        <div className="recipe-detail">

            <h1>{receta.nombre}</h1>
            <img
                src={receta.imagen}
                alt={receta.nombre}
                className="recipe-image"
            />
            <p className="recipe-description">{receta.descripcion}</p>

            <div className="recipe-columns">
                <div>
                    <h3>Ingredientes</h3>
                    <ul className="recipe-ingredients">
                        {receta.ingredientes?.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Preparación</h3>
                    <ol className="recipe-steps">
                        {receta.preparacion?.map((paso, i) => (
                            <li key={i}>{paso}</li>
                        ))}
                    </ol>
                </div>
            </div>

            <h4>Puntuación: <span className="recipe-rating">{renderEstrellas(receta.puntuacion)}</span></h4>
            <button onClick={() => navigate('/')} className="back-button">← Volver a Recetas</button>
        </div>
    )
}

export default RecipeDetail
