import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name : "page",
    initialState:{
        page: "CretaProject",
    },
    reducers:{
        setPage: (state,action) => {
            state.page = action.payload;
        }
    }

});

export const {setPage} = pageSlice.actions;
export default pageSlice.reducer;