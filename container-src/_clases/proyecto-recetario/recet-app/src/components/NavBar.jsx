import { NavLink } from 'react-router'

const imagen_chile = "../../public/chile.png"


const NavBar = () => {
    return (
        <nav>
            <img src={imagen_chile} />
            <span>|</span>
            <NavLink to={"/"}> Recetas </NavLink>
            <NavLink to={"/signin"}> SignIn </NavLink>
            <NavLink to={"/signout"}> SignOut </NavLink>
        </nav>
    )
}

export default NavBar