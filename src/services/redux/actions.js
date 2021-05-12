import axios from 'axios';

export const listMovies = (movieType) => async (dispatch) => {
    try{
        const result = await axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=079c21f9801a3caa498a95d9d9dfe4ca&language=es-ES`);
        dispatch({
            type:'SHOW_FILMS',
            payload: result.data.results,
        });
    } catch (error){
        console.error(error)
    }
}

export const listSearchMovies = (searchMovie) => async (dispatch) => {
    try{
        const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=079c21f9801a3caa498a95d9d9dfe4ca&language=es-ES&query=${searchMovie}`);
        dispatch({
            type:'SHOW_SEARCH_FILMS',
            payload: result.data.results,
        });
    } catch (error){
        console.error(error)
    }
}

export const detailsMovie = (movieId) => async (dispatch) => {
    try{
        const details = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=079c21f9801a3caa498a95d9d9dfe4ca&language=es-ES`)

        dispatch({
            type: 'SHOW_MOVIE_DETAILS',
            payload: details.data,
        })
    } catch(error){
        console.log(error)
    }
}