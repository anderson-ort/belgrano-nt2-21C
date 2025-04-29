import { useNavigate } from "react-router";
import { userSessionStore } from "../../_store/sessionStore";
import "./LogOut.css";
import { externalProfileStore } from "../../_store/externalProfileStore";

function Logout() {
	const { logout } = userSessionStore();
	const { clearProfile } = externalProfileStore();

	const navigate = useNavigate();

	const handleLogOut = () => {
		logout();
		clearProfile();
		navigate("/");
	};
	const handleCancel = () => {
		console.log("No hace mas que cancelar la ejecucion");
		navigate("/algunlugar");
	};
	return (
		<div className="auth-container">
			<div className="auth-card">
				<p className="auth-title">Desea cerrar la session realmente ...</p>
				<div>
					<button type="button" onClick={handleLogOut}>
						Si
					</button>
					<button type="button" onClick={handleCancel}>
						No
					</button>
				</div>
			</div>
		</div>
	);
}

export default Logout;
