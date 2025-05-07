import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../componets/Login";
import Profile from "../componets/Profile";
import SignUp from "../componets/SignUp";

const Routing = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</div>
	);
};

export default Routing;
