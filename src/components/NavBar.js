import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav>
        <ul className="navbar">

          <li className="navbar-item">
          <Link to="/components/WordCard">Word Card</Link>
          </li>

          <li className="navbar-item">
          <Link to="/components/Search">Search</Link>
          </li>

          <li className="navbar-item">
          <Link to="/components/Test">Test</Link>
          </li>

        </ul>
      </nav>
    );
  };
  
  export default Navbar;