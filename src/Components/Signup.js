import React, { useState } from 'react';
import '../Styles/Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignup = (event) => {
    event.preventDefault();
    
     const existingUsersString = localStorage.getItem('users'); 
     let users = [];
     if (existingUsersString) {
       try {
        users = JSON.parse(existingUsersString);
       } catch (error) {
        console.error('Error parsing users from localStorage:', error);
     }
     }

   const existingUser = users.find((user) => user === email);
   if (existingUser) {
    setErrorMessage('Email address already exists. Please proceed to Login');
    return; 
  }
   const newUser = email;

  
   users.push(newUser);

  
   const updatedUsersString = JSON.stringify(users);

  
    localStorage.setItem('users', updatedUsersString);
    setErrorMessage("User Signup Successful")
  
    

    
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <input type="submit" value="Submit" />
        <Link to='/login'>
            <p>Already Registered?Login</p>
          </Link>
      </form>
    </div>
  );
};

export default Signup;
