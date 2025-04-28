import "./App.css";
import { BrowserRouter } from "react-router";
import NavBtn from "./components/NavBtn/NavBtn";
import AppRouter from "./routes/AppRouter";
import { routes } from "./routes/routerConfig";

function App() {
	return (
		<BrowserRouter>
			<div>
				{routes.map((route) => {
					if (route.path === "/") return;

					return (
						<NavBtn
							key={route.id}
							label={route.path.replace("/", "").toLocaleUpperCase()}
							path={route.path}
						/>
					);
				})}
			</div>
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
