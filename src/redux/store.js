import { configureStore, createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: todosSlice.reducer,
});
export const todosActions = todosSlice.actions;
export default store;
