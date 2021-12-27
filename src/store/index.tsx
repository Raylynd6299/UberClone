import { configureStore } from "@reduxjs/toolkit";
import NavigationReducer from "./slice/NavigationSlice";

export const store = configureStore( {
    reducer: {
        navigation: NavigationReducer,
    }
} );
