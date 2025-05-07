import React, { useRef, useState } from 'react'
import { supabase } from '../auth/authClient';

const SignIn = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (e) => {
        e.preventDefault();

        setErrorMessage(null);
        setSuccessMessage(null);

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password) {
            setErrorMessage("Por favor, completá todos los campos.");
            return;
        }

        setLoading(true);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            setErrorMessage("Error: " + error.message);
        } else {
            setSuccessMessage(`¡ ${data.user.email} ha iniciado sesión !`);
            emailRef.current.value = "";
            passwordRef.current.value = "";
        }
    };
    return (
        <section className="bg-gray-60 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                            Supabase SignIn
                        </h1>

                        {/* Mensaje de error */}
                        {errorMessage && (
                            <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded-md dark:bg-red-200 dark:text-red-800">
                                {errorMessage}
                            </div>
                        )}

                        {/* Mensaje de éxito */}
                        {successMessage && (
                            <div className="p-3 text-sm text-green-700 bg-green-100 border border-green-400 rounded-md dark:bg-green-200 dark:text-green-800">
                                {successMessage}
                            </div>
                        )}


                        <form className="space-y-4" onSubmit={handleSignIn}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5"
                            >

                                {loading ?
                                    (
                                        <div className="flex justify-center items-center py-4">
                                            <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin dark:border-green-600"></div>
                                        </div>
                                    ) :
                                    ("Sign In")
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn