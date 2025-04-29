import { NavLink } from "react-router";

export const NotFoundPage = () => {
	return (
		<div className="notfound-container">
			<h1 className="notfound-title">404</h1>
			<p className="notfound-message">Ups... no encontramos esta página.</p>
			<NavLink to={"/"} className="notfound-link">
				Volver al inicio
			</NavLink>
		</div>
	);
};
