import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router";
import { useLoginUserMutation } from "../../_helpers/fetchUsers";
import { useLogin } from "../../_hooks/useLogin";
import { useLoginForm } from "../../_hooks/useLoginForm";

const Login = () => {
	const navigate = useNavigate();

	const { form, handleChange, resetForm } = useLoginForm();
	const { mutateAsync, isPending, isError } = useLoginUserMutation();
	const { handleLogin, error } = useLogin(null);
	const [errorMsg, setErrorMsg] = useState("");

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		const { username, password } = form;

		try {
			const result = await mutateAsync(username);

			// Validamos que exista un usuario
			if (!result || result.length === 0) {
				setErrorMsg("Usuario no encontrado");
				return;
			}

			const restoredUser = result[0];

			const success = handleLogin(password, restoredUser);

			if (!success) {
				setErrorMsg("Credenciales incorrectas");
				return;
			}

			resetForm();
			navigate("/profile");
		} catch (err) {
			setErrorMsg("Error al loguear:", err);
		}
	};

	if (isPending)
		return <div className="auth-container">Cargando usuario...</div>;
	if (isError)
		return (
			<div className="auth-container">
				<p>No se pudo cargar el usuario...❌ 📎</p>
				<div>
					<NavLink to={"/"} className="notfound-link">
						Volver al inicio
					</NavLink>
				</div>
			</div>
		);

	return (
		<div className="auth-container">
			<div className="auth-card">
				<h2 className="auth-title"> Login </h2>

				<form className="auth-form" onSubmit={handleLoginSubmit}>
					<div className="form-group">
						<label htmlFor="email">Alias</label>
						<input
							name="username"
							value={form.username}
							onChange={handleChange}
							required
							className="form-control"
							placeholder="githubAlias"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							onChange={handleChange}
							type="password"
							name="password"
							value={form.password}
							required
							className="form-control"
							placeholder="••••••••"
						/>
					</div>

					<button type="submit" className="auth-button">
						Login
					</button>
					{error && <div style={{ color: "red" }}>{errorMsg}</div>}
				</form>
			</div>
		</div>
	);
};
export default Login;
