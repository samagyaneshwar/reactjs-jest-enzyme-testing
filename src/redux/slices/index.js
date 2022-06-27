import { combineReducers } from "redux";
import postsSlice from "./postsSlice";

export const rootReducer = combineReducers({
    posts: postsSlice
})