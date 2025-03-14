import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/assets/icons/logo.png"

const Navbar = () => {
  const NavLinks = <>
  
  <Link to='/'><li><a>Home</a></li></Link>
  <Link to='/portfolio'><li><a>Our Portfolio</a></li></Link>
  <Link to='/team'><li><a>Our Team</a></li></Link>
  <Link to='/contact'><li><a>Contact Us</a></li></Link>
  <Link to='/service'><li><a>Services</a></li></Link>
  <Link to='/admin'><li><a>Admin</a></li></Link>
  </>;
  return (
    <div className="navbar bg-base-100 shadow-sm  mt-3 mb-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {NavLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
            <img className="w-28 h-16" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to='/login'><a className="btn btn-secondary">Login</a></Link>
      </div>
    </div>
  );
};

export default Navbar;
