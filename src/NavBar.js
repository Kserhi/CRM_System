import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/registration" className="nav-link">Реєстрація</Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">Вхід</Link>
      </li>
    </ul>
  </nav>
  );


}
export default Navbar;