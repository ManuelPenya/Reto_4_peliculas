import { applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {movieListReducer, movieDetailsReducer} from './reducers.js';

const reducer = combineReducers({
    movieList: movieListReducer,
    movieDetails: movieDetailsReducer,
})

 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
 const store = createStore(
    reducer,
    {},
    composeEnhancer(applyMiddleware(thunk)));

export default store;