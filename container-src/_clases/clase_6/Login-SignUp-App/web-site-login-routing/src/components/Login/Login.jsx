import React from "react";
import "./Login.css";

const Login = ({ handleLoginSubmit }) => {
	return (
		<div className="auth-container">
			<div className="auth-card">
				<h2 className="auth-title"> Login </h2>

				<form onSubmit={handleLoginSubmit} className="auth-form">
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							//   value={email}
							//   onChange={(e) => setEmail(e.target.value)}
							required
							className="form-control"
							placeholder="correo@ejemplo.com"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
							required
							className="form-control"
							placeholder="••••••••"
						/>
					</div>

					<button type="submit" className="auth-button">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
export default Login;
