import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsMovie } from '../../services/redux/actions.js';


export default function MovieDescription(props) {
    const dispatch = useDispatch();
    const movieId = props.match.params.id;
    const movieDetails = useSelector(state => state.movieDetails)
    const {details} = movieDetails;

    useEffect(() => {
        dispatch(detailsMovie(movieId))
    }, [dispatch, movieId])
    return (
        <div className="movieDescription">
            <h4>{details.title}</h4>
                <img src={"http://image.tmdb.org/t/p/w185" + details.poster_path} alt=""/>
                <div>Poner aqui descripcion y rating y que se muestre solo cuando se pase por encima</div>
        </div>
    )
}
