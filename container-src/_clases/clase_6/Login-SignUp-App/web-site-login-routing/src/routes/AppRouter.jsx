import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { userSessionStore } from "../_store/sessionStore";
import Loader from "../components/Loader/Loader";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";
import ProtectRoute from "./ProtectRoute";
import { routes } from "./routerConfig";

const AppRouter = () => {
	const { user } = userSessionStore();

	const renderRouteElement = (route) => {
		if (route.protected) {
			return (
				<ProtectRoute isAllowed={user?.roles?.includes("user")} redirectTo="/">
					{route.element}
				</ProtectRoute>
			);
		}

		return route.element;
	};

	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{routes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={renderRouteElement(route)}
					/>
				))}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
