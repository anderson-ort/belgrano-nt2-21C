import { useNavigate } from "react-router"
import styles from "./RecetaItem.module.css"
import { renderEstrellas } from "../../../utils/starsgen"

const RecetaItem = ({ nombre, imagen, descripcion, puntuacion, id }) => {
    const navigate = useNavigate()
    const handleClick = () => navigate(`/receta/${id}`)

    return (
        <div className={`${styles.ImgCard} ${styles.ICardStyle}`}>
            <div className={styles.CardContent}>

                <div className={styles.CardImage}>
                    <span className={styles.CardTitle}>{nombre}</span>
                    <img src={imagen} alt={nombre} />
                </div>

                <div className={styles.CardText}>
                    <p className={styles.CardDescription}>{descripcion}</p>
                    <div className={styles.CardRating}>
                        <span className={styles.Estrellas}>{renderEstrellas(puntuacion)}</span>
                    </div>
                </div>
            </div>
            <div className={styles.CardLink}>
                <button onClick={handleClick}> Ver receta</button>
            </div>

        </div>
    )
}

export default RecetaItem