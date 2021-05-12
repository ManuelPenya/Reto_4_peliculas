import React, { useEffect } from 'react';
// import axios from 'axios';
import Movie from '../../Components/Movie/Movie.jsx';
import './Movies.scss';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies } from '../../services/redux/actions.js';

const Movies = props =>{
    const movieType = props.match.params.movieType;
    const dispatch = useDispatch();
    const movieList = useSelector(state => state.movieList)
    const {movies} = movieList;

    useEffect(() =>{
        dispatch(listMovies(movieType));
    },[dispatch, movieType])

    return(
        <div className="movies">
            {movies?.map(movie => <Movie key={movie.id} movie={movie}></Movie>)}
        </div>
    ); 
};



export default Movies;