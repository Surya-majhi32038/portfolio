import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState:{
       skills: [],
       projects: [],
    },
    reducers:{
        setSkills: (state,action) => {
            state.skills = action.payload;
        },
        setProjects: (state,action) => {
            state.projects = action.payload;
        }
    }
});

export const {setSkills,setProjects} = userSlice.actions;
export default userSlice.reducer;