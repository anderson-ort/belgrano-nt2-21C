import { useState } from "react";

export const useLoginForm = () => {
	const [form, setForm] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const resetForm = () => {
		setForm({
			username: "",
			password: "",
		});
	};

	return {
		form,
		handleChange,
		resetForm,
	};
};
