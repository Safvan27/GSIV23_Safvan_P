import axios from "axios";
import { SELECTED_MOVIE } from "./movieListTypes";

export const setSelectedMovie = (data) => {
    return {
        type: SELECTED_MOVIE,
        payload: data,
    };
};
