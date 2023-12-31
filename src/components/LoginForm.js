import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [user,setUser] = useState(' ');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Send login request to the backend API
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
  
      // Handle authentication success
      console.log('Login success:', response.data);
      setUser(response.data.user.username);
      setAuthenticated(true);
      setErrorMessage('');
    } catch (error) {
      // Handle authentication error
      console.error('Login failed:', error.response.data);
      setErrorMessage(error.response.data.message);
    }
  };

  const handleLogout = () => {
    // Handle logout functionality
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <div className="LoginContainer">
        <h2>{authenticated ? ' ' : 'Login'}</h2>
        {authenticated ? (
          <h2>Welcome {user}</h2>
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={password} onChange={handleInputChange} required />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">Login</button>
          </form>
        )}
        {authenticated ? (<h3>You are logged in!</h3>)
         : (<Link to="/components/RegisterUser">
            <a href="/components/RegisterUser">Register an account</a>
            </Link>
            )}

      </div>
    </div>
  );
};

export default LoginForm;
