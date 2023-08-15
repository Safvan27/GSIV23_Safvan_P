import { combineReducers } from "redux";
import movieListReducer from "./movieList/movieListReducer";

const appReducer = combineReducers({
    MovieList: movieListReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
