import { BrowserRouter, NavLink } from "react-router";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { useStoreUser } from "./stores/useStoreUser";

const App = () => {
	const { user } = useStoreUser()

	return (
		<BrowserRouter>
			<div className="ContainerLinks">
				<NavLink className="Links" to={"/"}>
					Landing Page
				</NavLink>
				{!user &&
					<NavLink className="Links" to={"/login"}> Login</NavLink>
				}
				<NavLink className="Links" to={"/about"}>
					About
				</NavLink>
				<NavLink className="Links" to={"/items"}>
					Items
				</NavLink>


			</div>
			<AppRouter />
		</BrowserRouter>
	);
};

export default App;
