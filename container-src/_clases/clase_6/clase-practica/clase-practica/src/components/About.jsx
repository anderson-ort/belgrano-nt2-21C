import { NavLink } from "react-router";
import { useStoreUser } from "../stores/useStoreUser";

const About = () => {
	const { user, logoutUser } = useStoreUser()
	const logOutHandler = () => {
		logoutUser()
	}

	return (<div className="auth-container">
		<div>
			<p>
				{user && user.bio}
			</p>
			{user && <NavLink to={"/login"} onClick={logOutHandler}>Logout</NavLink>}
		</div>
	</div>);
};

export default About;
