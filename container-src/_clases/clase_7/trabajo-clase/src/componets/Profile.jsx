import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../auth/authClient";

export default function Profile() {
    const [session, setSession] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
            },
        );

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const handleSubmit = async () => {
        await supabase.auth.signOut();
        setSession(null);
        navigate("/");
    };

    return (
        <div className="flex min-h-screen flex-1 flex-col items-center justify-center px-6 py-12 bg-gray-900">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <img
                        className="mx-auto h-16 w-16 rounded-full border-2 border-indigo-500"
                        src="https://via.placeholder.com/150"
                        alt="User Avatar"
                    />
                    <h2 className="text-sm text-gray-400">
                        Bienvenido {session.user.email}
                    </h2>
                </div>

                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-white"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            autoComplete="name"
                            className="mt-1 block w-full rounded-md bg-gray-800 px-3 py-2 text-white placeholder-gray-400 outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:outline-indigo-400"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md bg-gray-800 px-3 py-2 text-white placeholder-gray-400 outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:outline-indigo-400"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="bio"
                            className="block text-sm font-medium text-white"
                        >
                            Bio
                        </label>
                        <textarea
                            id="bio"
                            name="bio"
                            rows="3"
                            className="mt-1 block w-full rounded-md bg-gray-800 px-3 py-2 text-white placeholder-gray-400 outline-1 -outline-offset-1 outline-gray-600 focus:outline-2 focus:outline-indigo-400"
                            placeholder="Tell us something about yourself..."
                        ></textarea>
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                            Sign Out
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
