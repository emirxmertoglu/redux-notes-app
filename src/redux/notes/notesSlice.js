import { createSlice, nanoid } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      {
        id: nanoid(),
        description: "Note 1",
        color: "#ffddaa",
      },
      {
        id: nanoid(),
        description: "Note 2",
        color: "#f0dda0",
      },
    ],
  },
  reducers: {},
});

export default notesSlice.reducer;
