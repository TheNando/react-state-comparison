import { create } from "zustand/react";

import { nanoid, type Todo } from "./utils";

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
      todos: [...state.todos, { id: nanoid(), title, completed: false }]
    })),
  clearCompletedTodos: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed)
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id)
    })),
  toggleAllTodos: (completed) =>
    set((state) => ({
      todos: state.todos.map((todo) => ({ ...todo, completed }))
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    })),
  updateTodo: ({ id, title }) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      )
    }))
}));

export function resetTodoStore(todos: Todo[] = []) {
  useTodoStore.setState({ todos });
}