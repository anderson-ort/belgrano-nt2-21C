import { useState } from "react";
import { useSignup } from "../../_helpers/fetchUsers";
import { useNavigate } from "react-router";

export default function Signup() {
	const signup = useSignup();
	const navigate = useNavigate();

	const [form, setForm] = useState({
		githubAlias: "",
		password: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		const { githubAlias, password } = form;

		e.preventDefault();

		const payload = {
			id: crypto.randomUUID(), // o lo genera el backend
			password: password,
			permissions: ["read:recipes", "write:recipes"],
			roles: ["user"],
			githubAlias: githubAlias,
		};

		signup.mutate(payload);
		navigate("/")
	};


	return (
		<div className="auth-container">
			<div className="auth-card">
				<h2 className="auth-title">Crear cuenta</h2>
				<form onSubmit={handleSubmit} className="auth-form">
					<div className="form-group">
						<label htmlFor="email">Alias</label>
						<input
							required
							name="githubAlias"
							className="form-control"
							placeholder="githubAlias"
							value={form.githubAlias}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							required
							className="form-control"
							placeholder="••••••••"
							value={form.password}
							onChange={handleChange}
						/>
					</div>
					<button type="submit" disabled={signup.isPending}>
						{signup.isPending ? "Creando..." : "Crear cuenta"}
					</button>
				</form>
			</div>
		</div>
	);
}
