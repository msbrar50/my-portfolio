import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-around">
      <NavLink to="/" className="px-4" activeClassName="font-bold">Home</NavLink>
      <NavLink to="/about" className="px-4" activeClassName="font-bold">About</NavLink>
      <NavLink to="/projects" className="px-4" activeClassName="font-bold">Projects</NavLink>
      <NavLink to="/skills" className="px-4" activeClassName="font-bold">Skills</NavLink>
    </nav>
  );
};

export default Navbar;
