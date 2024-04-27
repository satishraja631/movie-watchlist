import React from 'react'
import '../Styles/Home.css'
import Search from './Search';
import MovieList from './MovieList';

import BookmarkIcon from '@mui/icons-material/Bookmark';

function Home() {
  return (
    <div>
        <div className='box'>
             <p className='heading'>Welcome to Watchlists</p>
             <p>Browse movies,add them to watchlist and share them with friends.</p>
             <p>Just click the <BookmarkIcon/> to add a movie.Make sure to login before you add movies to your watchlist. </p>

          </div>
          
            <Search/>
            <MovieList/>
            
        
    </div>
  )
}

export default Home