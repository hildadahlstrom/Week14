import React from 'react'
import Movie from './Movie';

function MovieList({movies}) {
    return(
        <>
            <h1>Disney Movies</h1>
            <div className="movie-list">
                {movies.map((movie,index) => (
                    <Movie 
                    reviews = {movie.reviews}
                    key = {index} 
                    movie = {movie}
                    id = {index}
                    />
                ))}
            </div>
        </>
    );
}

export default MovieList