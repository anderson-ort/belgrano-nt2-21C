import { useState } from "react";
import { userSessionStore } from "../_store/sessionStore";

export const useLogin = () => {
	const { login } = userSessionStore();
	const [error, setError] = useState(null);

	const handleLogin = (password, user) => {
		if (!user || !user.password) {
			setError(true);
			return false;
		}

		if (user.password !== password) {
			setError(true);
			return false;
		}

		login(user);
		setError(false);
		return true;
	};

	return {
		handleLogin,
		error,
	};
};
