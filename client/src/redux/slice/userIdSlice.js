import { createSlice } from "@reduxjs/toolkit";

const userIdSlice = createSlice({
    name : "userId",
    initialState:{
       userId: "",
    },
    reducers:{
        setUserId: (state,action) => {
            state.userId = action.payload;
        },
       
    }
});

export const {setUserId} = userIdSlice.actions;
export default userIdSlice.reducer;