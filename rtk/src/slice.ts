import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import {
  isActive,
  isNotId,
  newTodo,
  toggleIfId,
  updateIfId,
  withCompletedAs,
  type Todo
} from "@/lib";

type TodosState = Todo[];

const initialState: TodosState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      prepare: (title: string) => ({
        payload: newTodo(title)
      }),
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      }
    },

    clearCompletedTodos: (state) => state.filter(isActive),

    removeTodo: (state, action: PayloadAction<string>) =>
      state.filter(isNotId(action.payload)),

    toggleAllTodos: (state, action: PayloadAction<boolean>) =>
      state.map(withCompletedAs(action.payload)),

    toggleTodo: (state, action: PayloadAction<string>) =>
      state.map(toggleIfId(action.payload)),

    updateTodo: (state, action: PayloadAction<{ id: string; title: string }>) =>
      state.map(updateIfId(action.payload.id, action.payload.title))
  }
});

export const {
  addTodo,
  clearCompletedTodos,
  removeTodo,
  toggleAllTodos,
  toggleTodo,
  updateTodo
} = todosSlice.actions;

export default todosSlice.reducer;
