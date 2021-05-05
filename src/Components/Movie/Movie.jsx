import React from 'react';
import './Movie.scss';

const Movie = ({movie}) => {
    return <div className="movie">
        <h4>{movie.title}</h4>
        <img src={"http://image.tmdb.org/t/p/w185" + movie.poster_path} alt=""/>
        <div>Poner aqui descripcion y rating y que se muestre solo cuando se pase por encima</div>
    </div>
}

export default Movie;