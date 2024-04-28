import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function Sidebar() {

  const {isLoggedIn} =useContext(AppContext);
  return (
    <div>
    
            <h1>Watchlists</h1>
            
            <Link to='/' >
            <Button  variant="contained" >Home</Button>
            </Link>
            
            
            
            
            <Link to='/watchlist'><Button  variant="outlined">Watchlist</Button></Link>
            
           
            {isLoggedIn?<Link to='/login'><Button  variant="outlined">Logout</Button></Link>:
            <Link to='/login'><Button variant="outlined">Login</Button></Link>}
            
                
         
        </div>
  )
}

export default Sidebar