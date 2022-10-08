import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: 'menuCustom',
    initialState: {
        checked: false,
        title: ''
    },
    reducers: {
        setCheckedMenuCustom: (state,action) => {
            state.checked = action.payload;

        },
        
        setTitleMenu: (state,action) => {
            state.title = action.payload;
        },
        
    }
})

export const {
    setCheckedMenuCustom,
    setTitleMenu

} = menuSlice.actions;

export default menuSlice.reducer