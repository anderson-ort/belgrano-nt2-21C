import "./NavBtn.css";
import { Link } from "react-router";

const NavBtn = ({ label, path }) => {
	return (
		<Link
			className="button"
			to={path}
			style={{ padding: "10px 20px", margin: "5px" }}
		>
			{label}
		</Link>
	);
};

export default NavBtn;
