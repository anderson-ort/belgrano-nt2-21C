import "./Presentacion.css"
import logo from "../../assets/react.svg"


const Presentacion = ({ nombre }) => {
    return (
        <>
            <div className="Image">
                <h3>Soy {nombre} </h3>
                <img src={logo} />
            </div>

        </>
    )
}


export { Presentacion }