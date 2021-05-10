import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.scss';

const Movie = (props) => {
    const {movie} = props;
    return( 
        <div className="movie" >
            <Link to={`/movie/${movie.id}`}>
                <h4>{movie.title}</h4>
                <img src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} alt=""/>
                <div>Poner aqui descripcion y rating y que se muestre solo cuando se pase por encima</div>
            </Link>     
        </div>
    )
}

export default Movie;