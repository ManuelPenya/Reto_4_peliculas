import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.scss';

const Movie = (props) => {
    const {movie} = props;
    return( 
        <Link to={`/movie/${movie.id}`}>
            <div className="movie" >
            
                <h4>{movie.title}</h4>
                <img src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} alt=""/>
               
            </div>
        </Link>  
    )
}

export default Movie;