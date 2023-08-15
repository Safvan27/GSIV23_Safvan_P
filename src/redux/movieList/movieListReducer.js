import { SELECTED_MOVIE } from "./movieListTypes";

const initialState = {
    loading: false,
    error: null,
    selectedMovie: [],
};

const movieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_MOVIE:
            return {
                ...state,
                loading: false,
                error: null,
                selectedMovie: action.payload,
            };

        default:
            return state;
    }
};

export default movieListReducer;
