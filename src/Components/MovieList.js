import React from 'react';

import { useContext } from 'react';
import { AppContext } from '../AppContext';
import '../Styles/MovieList.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark} from '@fortawesome/free-solid-svg-icons';




function MovieList() {
    const {searchedMovies,addToWatchlist,isLoggedIn} = useContext(AppContext)
    const movies=searchedMovies;

    const watchlistString = localStorage.getItem('watchlist');

    const handleAddToPlaylist=(movie)=>{
      addToWatchlist(movie);
      if(isLoggedIn){
        alert('Movie added to watchlist')
      }
      else{
        alert('Please login to add movies')
      }
      
    }

    



if (watchlistString) {
  const watchlist = JSON.parse(watchlistString);
  console.log(watchlist);
} else {
  console.log('No watchlist found in localStorage.');
}
   
  return (
    <div className='movie-list-container'>
      
        
         <ul className='movie-list'>
         {movies.map((movie) => (
          <div  >
          {movie.Poster!=="N/A" &&
          <li key={movie.imdbID} className='movie-card'>
            
            <button  className='bookmark-button' onClick={()=>handleAddToPlaylist(movie)}
            >
             <FontAwesomeIcon  icon={faBookmark}/>
            </button>
          <img src={movie.Poster} alt={movie.Title} />
          <h3 className='title' style={{ wordBreak: 'break-word' }}>{movie.Title}</h3>
          <p>{movie.Year}</p>
          
          
         </li>}
         </div>
        
        ))}
        </ul>
    
    </div>
    
  
  );
}

export default MovieList;