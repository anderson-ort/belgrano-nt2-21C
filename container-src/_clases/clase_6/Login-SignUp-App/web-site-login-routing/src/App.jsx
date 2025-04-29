import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { userSessionStore } from "./_store/sessionStore";
import NavBtn from "./components/NavBtn/NavBtn";
import AppRouter from "./routes/AppRouter";
import { routes } from "./routes/routerConfig";

const queryClient = new QueryClient();

function App() {
	const { user } = userSessionStore();

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<div>
					{routes.map((route) => {
						if (route.path === "/") return null;

						// Ocultar /profile si no hay usuario
						if (route.path === "/profile" && !user) return null;

						// Ocultar /login si hay usuario
						if (route.path === "/login" && user) return null;

						// Ocultar /logout si no hay usuario
						if (route.path === "/logout" && !user) return null;

						// Ocultar /signup si hay usuario
						if (route.path === "/signup" && user) return null;

						// Etiqueta de navegación
						const label = route.path.replace("/", "").toUpperCase();

						return <NavBtn key={route.id} label={label} path={route.path} />;
					})}
				</div>
				<AppRouter />
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
