import { createSlice } from '@reduxjs/toolkit'

import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  : [],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;

      //add check for same title

      state.pastes.push(paste);
      localStorage.setItem("pastes",
        JSON.stringify(state.pastes));
      toast("Paste created successfully")
    
    },
    updateToPastes: (state, action) => {
      
    },
    resetAllPastes: (state, action) => {
      
    },

    removeFromPastes: (state, acrion) => {

    },
  },
})


export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer