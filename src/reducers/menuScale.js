import { createSlice } from "@reduxjs/toolkit";

export const menuScale = createSlice({
    name: 'menuScale',
    initialState: {
        checked: false,
        title: ''
    },
    reducers: {
        setCheckedMenuScale: (state,action) => {
            state.checked = action.payload;

        },
        
        
    }
})

export const {
    setCheckedMenuScale,
    

} = menuScale.actions;

export default menuScale.reducer