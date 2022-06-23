import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { rootReducer } from "../slices";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (dm) => dm().concat(thunk),
});
