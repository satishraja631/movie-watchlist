import {createContext,useState} from 'react';

export const AppContext=createContext({
    searchedMovies:[],
    loggedInUser:null,
    isLoggedIn:false,
    watchlist:{},
    addToWatchlist:(movie)=>{},
    
})

const AppProvider=({children})=>{
    const [searchedMovies,setSearchedMovies]=useState([])
    const [loggedInUser,setLoggedInUser]=useState(null);
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [watchlist,setWatchlist]=useState({});
    

    
    const addToWatchlist=(movie)=>{

       const existingMovies = watchlist[loggedInUser] || [];
       const isDuplicate = existingMovies.some((existingMovie) => existingMovie.imdbID === movie.imdbID); // Check for duplicates

       if (!isDuplicate) {
        const updatedWatchlist = {
        ...watchlist,
        [loggedInUser]: [...existingMovies, movie],
       };
        
        setWatchlist(updatedWatchlist);
        
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist))
    
       } else {
        console.warn('Movie already exists in watchlist.'); // Or display user notification
      }
        

        

    }
    const removeFromWatchlist = (movieId) => {
    setWatchlist((watchlist) => {
    

    if (!loggedInUser || !watchlist[loggedInUser]) {
      console.warn('No watchlist found for user.');
      return watchlist; // Don't modify if no watchlist exists
    }

    const filteredWatchlist = watchlist[loggedInUser].filter(
      (movie) => movie.imdbID !== movieId
    );
    localStorage.setItem(
    'watchlist',
    JSON.stringify({
      [loggedInUser]: filteredWatchlist, // Update only the user's watchlist
    })
  );

    return {
      ...watchlist,
      [loggedInUser]: filteredWatchlist,
    };
  });

 
  
};
const value={searchedMovies,setSearchedMovies,loggedInUser,setLoggedInUser,isLoggedIn,setIsLoggedIn,addToWatchlist,removeFromWatchlist,watchlist,setWatchlist}


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}



export default AppProvider;
