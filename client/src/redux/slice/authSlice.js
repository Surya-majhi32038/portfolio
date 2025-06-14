import { createSlice } from "@reduxjs/toolkit";

const authSlice =  createSlice({
    name:"auth",
    initialState: {
        user: null,
        Islogged: false,
        authEmail:null
    },
    reducers: {
        loggedIn: (state) => {
            state.Islogged = true;
        },
        loggedOut: (state) => {
            state.Islogged = false;
        },
        setUser:(state,action) => {
            state.user = action.payload;
        },
        setAuthEmail:(state,action) => {
            state.authEmail = action.payload;
        }
    }
});

export const {loggedIn,loggedOut,setUser,setAuthEmail} = authSlice.actions;
export default authSlice.reducer;