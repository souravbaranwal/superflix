import { combineReducers } from "redux";
import genres from "./genres.reducers";
import heroMovie from "./heroMovie.reducers";

const rootReducer = combineReducers({
  genres,
  heroMovie
});

export default rootReducer;
