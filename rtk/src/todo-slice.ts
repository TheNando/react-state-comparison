import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { nanoid, type Todo } from "./utils";

type TodosState = Todo[];

const initialState: TodosState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      prepare: (title: string) => ({
        payload: {
          id: nanoid(),
          title,
          completed: false
        }
      }),
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      }
    },

    clearCompletedTodos: (state) => state.filter((todo) => !todo.completed),

    removeTodo: (state, action: PayloadAction<string>) =>
      state.filter((todo) => todo.id !== action.payload),

    toggleAllTodos: (state, action: PayloadAction<boolean>) => {
      state.forEach((todo) => {
        todo.completed = action.payload;
      });
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((currentTodo) => currentTodo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    updateTodo: (
      state,
      action: PayloadAction<{ id: string; title: string; }>
    ) => {
      const todo = state.find((currentTodo) => currentTodo.id === action.payload.id);

      if (todo) {
        todo.title = action.payload.title;
      }
    }
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