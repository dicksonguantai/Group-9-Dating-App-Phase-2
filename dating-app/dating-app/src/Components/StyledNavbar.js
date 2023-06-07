import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      
      <NavLink
        to="/Login"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default Navbar;
