import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <nav>
    <ul className="nav-list">
      <li>
        <Link to="/" className="nav-item">
          Home
        </Link>
      </li>
      <li>
        <Link to="/users" className="nav-item">
          Users
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
