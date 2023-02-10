import { createSlice, nanoid } from "@reduxjs/toolkit";

const mockData = [
  {
    id: nanoid(),
    description: "Test note 1",
    color: "#3F0071",
  },
  {
    id: nanoid(),
    description: "Test note 2",
    color: "#FB2576",
  },
  {
    id: nanoid(),
    description: "Test note 3",
    color: "#332FD0",
  },
  {
    id: nanoid(),
    description: "Test note 4",
    color: "#0002A1",
  },
];

const colors = [
  {
    id: nanoid(),
    backgroundColor: "#3F0071",
    isActive: true,
  },
  {
    id: nanoid(),
    backgroundColor: "#FB2576",
    isActive: false,
  },
  {
    id: nanoid(),
    backgroundColor: "#332FD0",
    isActive: false,
  },
  {
    id: nanoid(),
    backgroundColor: "#0002A1",
    isActive: false,
  },
];

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    list: JSON.parse(localStorage.getItem("list")) || mockData,
    colors,
    activeColor: "",
    search: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.list.push({
        id: nanoid(),
        description: action.payload.description,
        color: state.activeColor || "#3F0071",
      });
      localStorage.setItem("list", JSON.stringify(state.list));
    },
    changeActiveColor: (state, action) => {
      state.colors.forEach((color) => (color.isActive = false));
      const current = state.colors.find(
        (color) => color.id === action.payload.id
      );
      current.isActive = true;
      state.activeColor = current.backgroundColor;
    },
    changeSearch: (state, action) => {
      state.search = action.payload.search;
    },
  },
});

export const getFilteredNotes = (state) => {
  if (state.notes.activeColor !== "" && state.notes.search !== "") {
    return state.notes.list.filter(
      (note) =>
        note.color === state.notes.activeColor &&
        note.description.toLowerCase().includes(state.notes.search)
    );
  } else if (state.notes.activeColor !== "") {
    return state.notes.list.filter(
      (note) => note.color === state.notes.activeColor
    );
  } else if (state.notes.search !== "") {
    return state.notes.list.filter((note) =>
      note.description.toLowerCase().includes(state.notes.search)
    );
  } else {
    return state.notes.list;
  }
};

export const { addNote, changeActiveColor, changeSearch } = notesSlice.actions;

export default notesSlice.reducer;
