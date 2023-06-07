import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"> Home </Link>
      <Link to="/profile"> profile </Link>
    </nav>
  );
};
export default Navbar;
