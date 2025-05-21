import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getRecetaById } from '../../service/receta.service'

import "./RecetaDetail.css"
import { renderEstrellas } from '../../../../utils/starsgen'
import { useUserStorage } from '../../../../stores/useUserStorage'
import AddFav from '../../../../components/AddFav/AddFav'

const RecetaDetail = () => {

    const navigate = useNavigate()
    let { id } = useParams()
    id = Number(id)

    const { user } = useUserStorage()

    const [receta, setReceta] = useState(null)

    const home = () => navigate('/')


    useEffect(
        () => {
            const fecthReceta = async () => {
                try {
                    const data = await getRecetaById(id)
                    setReceta(data)
                } catch (e) {
                    console.error(e)
                }
            }
            fecthReceta()
        }, [id])

    return (receta &&
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
            {user && <AddFav id={id} />}
            <button onClick={home} className="back-button">← Volver a Recetas</button>
        </div>
    )
}

export default RecetaDetail