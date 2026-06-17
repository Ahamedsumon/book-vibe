import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar px-0">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/listed-books">Listed Books</NavLink>
            <NavLink to="/pages-to-read">Pages to Read</NavLink>
          </ul>
        </div>
        <a className=" text-xl cursor-pointer">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/listed-books">Listed Books</NavLink>
          <NavLink to="/pages-to-read">Pages to Read</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-1">
        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
