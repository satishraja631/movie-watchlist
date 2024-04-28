import React from 'react';
import AppProvider from './AppContext'

import './Styles/Home.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Watchlist from './Components/Watchlist';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';

import Sidebar from './Components/Sidebar';


const App = () => {
 
  return (
    <AppProvider>
      <Router>
      <div className="home-page">
        <div className='sidebar'>
          <Sidebar/>
        </div>
        <div className='main-content'>
          
            
          <Routes>
             <Route index element={<Home/>}></Route>
             <Route path='/watchlist' element={<Watchlist/>}></Route>
             <Route path='/login' element={<Login/>}></Route>
             <Route path='/signup' element={<Signup/>}/>
           </Routes>
          
                  
         </div>
        
        
      </div>
      </Router>
      
    </AppProvider>
  );
};

export default App;
