import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsMovie } from '../../services/redux/actions.js';
import './MovieDescription.scss';

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
            <h1>{details.title}</h1>
            <div className="movieDetailsPpal">
                <img src={"http://image.tmdb.org/t/p/w400" + details.poster_path} alt=""/>
                <div className="description_and_rating">
                    <p>{details.overview}</p>
                    <p>{details.release_date}</p>
                    <a href={details.homepage}>{details.homepage}</a>
                    <h2>Rating: {details.vote_average}</h2>
                </div>
            </div>
            
        </div>
    )
}
