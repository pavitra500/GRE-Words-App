import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthenticated(false);

  };


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

          <li className="navbar-right">
          {authenticated ? (
            <Link to="/components/LoginForm">
          <button onClick={handleLogout}>Logout</button>
          </Link>
          ) 
          : (<Link to="/components/LoginForm">Login</Link>)}
          </li>

        </ul>
      </nav>
    );
  };
  
  export default Navbar;