import { combineReducers } from "redux";
import genres from "./genres.reducers";

const rootReducer = combineReducers({
  genres
});

export default rootReducer;
