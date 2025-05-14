import { useRef, useState } from "react";
import { supabase } from "../auth/authClient"

const SignUp = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);



    const handleSignUp = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        setErrorMessage(null);
        setSuccessMessage(null);


        if (!email || !password) {
            setErrorMessage("Por favor, completá todos los campos.");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password
        })


        console.log(data);



        if (error) {
            setErrorMessage(error.message);
        } else {

            setSuccessMessage(`Registro exitoso. Verificá tu correo: ${data?.user.email}`);
            emailRef.current.value = "";
            passwordRef.current.value = "";
        }

    }

    return (
        <section className="bg-gray-60 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            SupaBase SignUp
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

                        <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" ref={emailRef} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" ref={passwordRef} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5"
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>)
}

export default SignUp