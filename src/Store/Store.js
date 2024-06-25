import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/ThemeSlice"


export const store = configureStore({
    reducer :{
        theme : themeReducer
    }
})


// ! Step 2 of the Store .js Setup store.js into the main.js
