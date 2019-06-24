import React from 'react';
import { Link, NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: '#ffc107' };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-danger" to="/">Course Admin App</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" activeStyle={activeStyle}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/courses" activeStyle={activeStyle}>Courses</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeStyle={activeStyle}>About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;