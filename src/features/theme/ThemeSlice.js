// ! Step 1 to import createSlice 
// * because without createSlice we can not create reducer 
import { createSlice } from "@reduxjs/toolkit";


// ! Step 2 because we need to get default system mode soo we used the local storage
const initialTheme = localStorage.getItem("theme") || 'dark';


// ! Step 3 we need to give default value to slice soo we create object for the slice 

const initialState = {
    themeValue: initialTheme
}

// ! Step 4 Create Slice Funciton 

export const themeSlice = createSlice({


    name: "theme", // * name is important you need to give when you create Slice 
    initialState,  // * for use the inital value we create the intitalState Object
    reducers: {


        // ! this reducer when user manually
        themeChange: (state, action) => {
            state.themeValue = action.payload;
            localStorage.setItem("theme", action.payload)
        },


        // ! this reducer for the set default theme mode
        setSystemTheme: (state, action) => {
            state.themeValue = action.payload
        }
    }
})


// ! Step 5 to export the reducer functions 

export const { themeChange, setSystemTheme } = themeSlice.actions;


// ! Step 6 to export the slice function 

export default themeSlice.reducer;


// ! Step 7 step into store.js
