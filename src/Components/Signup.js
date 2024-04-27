import React, { useState } from 'react';
import '../Styles/Signup.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignup = (event) => {
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

   const existingUser = users.find((user) => user === email);
   if (existingUser) {
    setErrorMessage('Email address already exists. Please choose a different email.');
    return; // Prevent further processing
  }
   const newUser = email;

  // Add the new user to the array
   users.push(newUser);

  // Convert updated users array to JSON string
   const updatedUsersString = JSON.stringify(users);

  // Store updated users array in localStorage
    localStorage.setItem('users', updatedUsersString);
    setErrorMessage("User Signup Successful")
  
    

    // localStorage.setItem('userMail', email);
    // setEmail(''); // Clear input field after successful signup
    // setErrorMessage('Signup successful!'); // Optional success message
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
      </form>
    </div>
  );
};

export default Signup;
