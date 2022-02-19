import React from 'react'
import MovieArray from './data/movieAray'
import MovieList from './components/MovieList';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  const [movies, setMovies] = useState(MovieArray);
  return (
        <>
            <MovieList movies = {movies}/>
        </>
    )
  }
export default App;
