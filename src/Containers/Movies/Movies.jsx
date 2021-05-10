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
    /* const [movies, setMovies] = useState([]);

    useEffect(() =>{
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=079c21f9801a3caa498a95d9d9dfe4ca&language=es-ES`)
            .then(res => setMovies(res.data.results))
            .catch(console.error)
    },[movieType]);*/
    return(
        <div className="movies">
            {movies?.map(movie => <Movie key={movie.id} movie={movie}></Movie>)}
        </div>
    ); 
};



export default Movies;