import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import Loader from "../components/Loader/Loader";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";
import ProtectRoute from "./ProtectRoute";
import { routes } from "./routerConfig";

const AppRouter = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				{routes.map((route) => {
					if (route.protected) {
						return (
							<Route
								key={route.id.toString()}
								path={route.path}
								element={
									<ProtectRoute isAllowed={true} redirectTo="/">
										{route.element}
									</ProtectRoute>
								}
							/>
						);
					}

					return (
						<Route
							key={route.id.toString()}
							path={route.path}
							element={route.element}
						/>
					);
				})}
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
