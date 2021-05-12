import React, { useEffect } from 'react';
// import axios from 'axios';
import Movie from '../../Components/Movie/Movie.jsx';
import './../Movies/Movies.scss';
import { useDispatch, useSelector } from 'react-redux';
import {listSearchMovies} from './../../services/redux/actions.js';

const SearchScreen = props =>{
    const searchMovie = props.match.params.name;
    const dispatch = useDispatch();
    const movieSearchList = useSelector(state => state.movieSearchList)
    const {movies} = movieSearchList;

    useEffect(() =>{
        dispatch(listSearchMovies(searchMovie));
    },[dispatch, searchMovie])
    
    return(
        <div className="movies">
            {movies?.map(movie => <Movie key={movie.id} movie={movie}></Movie>)}
        </div>
    ); 
};



export default SearchScreen;