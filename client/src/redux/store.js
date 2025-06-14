import { configureStore } from "@reduxjs/toolkit";
import navSlice from './slice/navSlice.js';
import pageSlice from './slice/pageSlice.js'
import userSlice from './slice/userSlice.js';
import authSlice from './slice/authSlice.js'
const store = configureStore({
    reducer: {
        nav : navSlice,
        page: pageSlice,
        user: userSlice,
        auth: authSlice
    }
});

export default store;