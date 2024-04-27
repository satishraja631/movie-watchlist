import React, { useState,  useContext } from 'react';

import axios from 'axios';
import { AppContext } from '../AppContext';
import '../Styles/Search.css';


const OMDB_API_KEY='d63b7f1'

function Search() {
  const [searchTerm, setSearchTerm] = useState('');



  const {setSearchedMovies}=useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&S=${searchTerm}`);
      setSearchedMovies(response.data.Search);
    }
    setSearchTerm('');
  };

  return (
    <div>
    <form   className='search-bar' onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
    </div>
  );
}

export default Search;