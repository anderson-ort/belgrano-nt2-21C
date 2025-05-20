import { NavLink } from 'react-router'
import './NavBar.css'
import chile from '/chile.png'

const NavBar = () => {
  return (
    <nav className="NavBar">
      <img src={chile} alt="Logo Chile" className="NavBar__logo" />
      <span className="NavBar__separator">|</span>

      <NavLink to="/" className={({ isActive }) =>
        isActive ? 'NavBar__link NavBar__link--active' : 'NavBar__link'
      }>
        Recetas
      </NavLink>

      <NavLink to="/signin" className={({ isActive }) =>
        isActive ? 'NavBar__link NavBar__link--active' : 'NavBar__link'
      }>
        Sign In
      </NavLink>

      <NavLink to="/signout" className={({ isActive }) =>
        isActive ? 'NavBar__link NavBar__link--active' : 'NavBar__link'
      }>
        Sign Out
      </NavLink>
    </nav>
  )
}

export default NavBar
