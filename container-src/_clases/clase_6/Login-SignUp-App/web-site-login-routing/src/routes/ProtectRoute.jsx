import React from "react";
import { Navigate } from "react-router";

const ProtectRoute = ({ children, isAllowed, redirectTo }) => {
	if (!isAllowed) return <Navigate to={redirectTo} />;
	return children;
};

export default ProtectRoute;
