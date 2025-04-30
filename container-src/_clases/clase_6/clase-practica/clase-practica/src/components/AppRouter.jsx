import { Routes, Route } from "react-router";
import Landing from "./Landing";
import Items from "./Items";
import About from "./About";
import NotFoundpage from "./NotFoundpage";
import Login from "./Login/Login";
import ProtectedRoute from "../routes/ProtectedRoute";
import { useStoreUser } from "../stores/useStoreUser";

const AppRouter = () => {
	const { user } = useStoreUser()

	return (
		<div className="Body">
			<Routes>
				<Route index element={<Landing />} />
				<Route path="/landing" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/items"
					element={
						<ProtectedRoute user={user} >
							<Items />
						</ProtectedRoute>
					}
				/>
				<Route path="/*" element={<NotFoundpage />} />
			</Routes>
		</div>
	);
};

export default AppRouter;
