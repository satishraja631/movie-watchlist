import React, { useEffect} from 'react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import '../Styles/Watchlist.css'
import Login from './Login';

import '../Styles/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark} from '@fortawesome/free-solid-svg-icons';



function Watchlist() {
  const {isLoggedIn,loggedInUser,removeFromWatchlist,setWatchlist,watchlist}=useContext(AppContext);

 
  useEffect(() => {
    
    if (isLoggedIn) {
      const watchlistString = localStorage.getItem('watchlist');
      try {
        if (watchlistString) {
          setWatchlist(JSON.parse(watchlistString));
        }
      } catch (error) {
        console.error('Error parsing watchlist from localStorage:', error);
      }
    }
  });

  

  const handleRemoveFromPlaylist=(movieId)=>{
    removeFromWatchlist(movieId);
    alert('movie removed from watchlist');
  }
  return (

    
    <div className='watch-list-container'>
      {isLoggedIn && loggedInUser ? (
      <ul className='watch-list'>
      
        
          
          {watchlist[loggedInUser] && watchlist[loggedInUser].length > 0 ? (
            watchlist[loggedInUser].map((movie) => (
              <li key={movie.imdbID} className='movie-card'>
                <button  className='bookmark-button' onClick={()=>handleRemoveFromPlaylist(movie.imdbID)}
                ><FontAwesomeIcon  icon={faBookmark}/></button>
                <img src={movie.Poster} alt={movie.Title} />
                <p className='title' style={{ wordBreak: 'break-word' }}>{movie.Title}</p>
                 <p>{movie.Year}</p>
              </li>
            ))
          ) : (
            <p>Your watchlist is currently empty. </p>
          )}
       
      
    </ul>
     ) : (
        <div className='watchlist-login-form'>
        
         <Login/>
        
         </div>
      )}
    </div>
   
   
  )
}

export default Watchlist