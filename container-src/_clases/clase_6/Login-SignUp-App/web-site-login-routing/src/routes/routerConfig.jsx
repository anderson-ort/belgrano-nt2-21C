import { lazy } from "react";
import Profile from "../components/Profile/Profile";
// me permite cargarlo cuando necesite la pagina
// alternativa que es para investigar el uso de vite que te permite hacer un prefetchloaders

const LandingPage = lazy(() => import("../components/LandingPage/LandingPage"));
const Login = lazy(() => import("../components/Login/Login"));
const LogOut = lazy(() => import("../components/LogOut/LogOut"));
const SignUp = lazy(() => import("../components/SignUp/SignUp"));

export const routes = [
	{ id: 0, path: "/", element: <LandingPage /> },
	{ id: 1, path: "/login", element: <Login /> },
	{ id: 2, path: "/logout", element: <LogOut /> },
	{ id: 3, path: "/signup", element: <SignUp /> },
	{
		id: 4,
		path: "/profile",
		element: <Profile />,
		protected: true,
	},
];
