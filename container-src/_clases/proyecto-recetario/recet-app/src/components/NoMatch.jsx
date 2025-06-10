
import { Link } from 'react-router';

const NoMatch = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h2>404 - Página no encontrada</h2>
            <p>La ruta que estás buscando no existe.</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
};

export default NoMatch;
