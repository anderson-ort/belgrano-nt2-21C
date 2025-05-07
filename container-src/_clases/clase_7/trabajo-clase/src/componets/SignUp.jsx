import { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { supabase } from "../auth/authClient";

const chile = "../../public/chile.png";

export default function SignUp() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const navigate = useNavigate();

	const [errorMsg, setErrorMsg] = useState(null);
	const [successMsg, setSuccessMsg] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		setErrorMsg(null);
		setSuccessMsg(null);

		const { data, error } = await supabase.auth.signUp({
			email,
			password,
		});

		if (error) {
			setErrorMsg(error.message);
		} else {
			setSuccessMsg(`${data.user.email} ha hecho sign up`);

			emailRef.current.value = "";
			passwordRef.current.value = "";

			navigate("/signin");
		}
	};

	return (
		<div className="Container flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img alt="Don Picoso" src={chile} className="mx-auto h-10 w-auto" />
				<h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
					Sign up to Don Picoso
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-4">
				{/* Mensaje de error */}
				{errorMsg && (
					<div className="w-full rounded-md border border-red-500 bg-red-100 px-4 py-2 text-sm text-red-800 dark:bg-red-200 dark:text-red-900">
						{errorMsg}
					</div>
				)}

				{/* Mensaje de éxito */}
				{successMsg && (
					<div className="w-full rounded-md border border-green-500 bg-green-100 px-4 py-2 text-sm text-green-800 dark:bg-green-200 dark:text-green-900">
						{successMsg}
					</div>
				)}

				<form className="space-y-6" onSubmit={handleSubmit}>
					<div>
						<label
							htmlFor="email"
							className="block text-sm/6 font-medium text-white"
						>
							Email address
						</label>
						<div className="mt-2">
							<input
								ref={emailRef}
								id="email"
								name="email"
								type="email"
								required
								autoComplete="email"
								className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-400 sm:text-sm/6"
							/>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<label
								htmlFor="password"
								className="block text-sm/6 font-medium text-white"
							>
								Password
							</label>
						</div>
						<div className="mt-2">
							<input
								ref={passwordRef}
								id="password"
								name="password"
								type="password"
								required
								autoComplete="current-password"
								className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-400 sm:text-sm/6"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
						>
							Sign up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
