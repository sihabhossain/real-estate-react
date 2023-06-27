import React from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container max-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        {/* buttons */}
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to={"/"}>
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to={"/"}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
