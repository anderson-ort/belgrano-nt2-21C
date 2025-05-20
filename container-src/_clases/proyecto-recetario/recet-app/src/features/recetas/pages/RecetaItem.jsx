import { useNavigate } from "react-router";
import "./RecetaItem.css"

const RecetaItem = ({ id, nombre, imagen, puntuacion, descripcion }) => {
    const navigate = useNavigate()

    const renderEstrellas = (puntos) => {
        const max = 5;
        const llenas = "★".repeat(puntos);
        const vacías = "☆".repeat(max - puntos);
        return llenas + vacías;
    }

    const handleClick = () => {
        navigate(`/receta/${id}`)

    }

    return (
        <div className="ImgCard ICardStyle">
            <div className="CardContent">

                <div className="CardImage">
                    <span className="CardTitle">{nombre}</span>
                    <img src={imagen} alt={nombre} />
                </div>

                <div className="CardText">
                    <p className="CardDescription">{descripcion}</p>
                    <div className="CardRating">
                        <span className="Estrellas">{renderEstrellas(puntuacion)}</span>
                    </div>
                </div>
            </div>

            <div className="CardLink">
                <button onClick={handleClick} title="Ver receta">Ver el recetario</button>
            </div>
        </div>
    )
}

export default RecetaItem
