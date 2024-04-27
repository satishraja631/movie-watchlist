import React, { useState } from 'react';
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import '../Styles/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const {loggedInUser,setLoggedInUser,isLoggedIn,setIsLoggedIn} =useContext(AppContext);
 
  const [email, setEmail] = useState('');

  const [errorMessage, setErrorMessage] = useState(null);

  

  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const existingUsersString = localStorage.getItem('users'); // Replace 'users' with your key
     let users = [];
     if (existingUsersString) {
       try {
        users = JSON.parse(existingUsersString);
       } catch (error) {
        console.error('Error parsing users from localStorage:', error);
     }
   }
   const foundUser = users.find(
    (user) => user === email
  );
    


    
    if (foundUser) {
      setLoggedInUser(foundUser)
      setIsLoggedIn(true)
      setErrorMessage('Login successful!'); // Optional success message
      
    } else {
      setErrorMessage('Invalid email or password (no password implemented here).');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setIsLoggedIn(false)
    console.log(loggedInUser)
    setErrorMessage(null); // Clear any previous error message
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {isLoggedIn ? (
        <div>
          <p>You are logged in as {loggedInUser}</p>
          
          <input type='submit' value='Logout' onClick={handleLogout}></input>
        </div>
      ) : (
        <form onSubmit={handleLogin} >
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
          <br/>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          
          <input type="submit" value="Submit" />
           <Link to='/signup'>
            <p>New user?Signup</p>
          </Link>
        </form>
      )}
    </div>
  );
};

export default Login;
