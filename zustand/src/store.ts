import { create } from "zustand/react";

import {
  isActive,
  isNotId,
  newTodo,
  toggleIfId,
  updateIfId,
  withCompletedAs,
  type Todo
} from "@/lib";

type UpdateTodoPayload = {
  id: string;
  title: string;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (title: string) => void;
  clearCompletedTodos: () => void;
  removeTodo: (id: string) => void;
  toggleAllTodos: (completed: boolean) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (payload: UpdateTodoPayload) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, newTodo(title)]
    })),
  clearCompletedTodos: () =>
    set((state) => ({
      todos: state.todos.filter(isActive)
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter(isNotId(id))
    })),
  toggleAllTodos: (completed) =>
    set((state) => ({
      todos: state.todos.map(withCompletedAs(completed))
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map(toggleIfId(id))
    })),
  updateTodo: ({ id, title }) =>
    set((state) => ({
      todos: state.todos.map(updateIfId(id, title))
    }))
}));

export function resetTodoStore(todos: Todo[] = []) {
  useTodoStore.setState({ todos });
}
