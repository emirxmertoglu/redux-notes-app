import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './notes/notesSlice'

const store = configureStore({
  reducer: {
    notes: notesReducer
  }
})

export default store