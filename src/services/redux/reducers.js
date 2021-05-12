 
const movieInitialState = {

    movies: [], 
}

export const movieListReducer = (state = movieInitialState, action) => {
    switch (action.type) {
        case 'SHOW_FILMS':
            return { 
                movies: action.payload }

        default:
            return state
    }
};

export const movieSearchListReducer = (state = movieInitialState, action) => {
    switch (action.type) {
        case 'SHOW_SEARCH_FILMS':
            return { 
                movies: action.payload }

        default:
            return state
    }
};

export const movieDetailsReducer = (state = {details:[]}, action) => {
    switch(action.type){
        case 'SHOW_MOVIE_DETAILS':
            return{
                details:action.payload
            }
            default:
                return state
    }
}


