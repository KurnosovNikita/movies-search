import { combineReducers } from "redux";
import app from "./app/app.reducer";
import search from "./search/search.reducer";
import movieDetail from "./movie-detail/movie-detail.reducer";

const rootReducer = combineReducers({
    app,
    search,
    movieDetail,
});

export default rootReducer;