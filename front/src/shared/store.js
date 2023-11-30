import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {playerReducer} from "./playerSlice";

const rootReducer = combineReducers({
    playerReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
