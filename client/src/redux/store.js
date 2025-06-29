import { configureStore } from "@reduxjs/toolkit";
import navSlice from './slice/navSlice.js';
import pageSlice from './slice/pageSlice.js'
import userSlice from './slice/userSlice.js';
import authSlice from './slice/authSlice.js'
import userIdSlice from './slice/userIdSlice.js';
const store = configureStore({
    reducer: {
        nav : navSlice,
        page: pageSlice,
        user: userSlice,
        auth: authSlice,
        userId: userIdSlice,
    }
});

export default store;