export default function Signup({ handleSignupSubmit }) {
	return (
		<div className="auth-container">
			<div className="auth-card">
				<h2 className="auth-title">Crear cuenta</h2>
				<form onSubmit={handleSignupSubmit} className="auth-form">
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
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
							required
							className="form-control"
							placeholder="••••••••"
						/>
					</div>
					<button type="submit" className="auth-button">
						Registrarse
					</button>
				</form>
			</div>
		</div>
	);
}
