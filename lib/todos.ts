import { nanoid } from "./utils";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export const isActive = (todo: Todo) => !todo.completed;

export const isCompleted = (todo: Todo) => todo.completed;

export const isNotId = (id: string) => (todo: Todo): boolean => todo.id !== id;

export const newTodo = (title: string): Todo => ({
  id: nanoid(),
  title,
  completed: false
});

export const toggleIfId = (id: string) => (todo: Todo): Todo =>
  todo.id === id ? { ...todo, completed: !todo.completed } : todo;


export const updateIfId = (id: string, title: string) => (todo: Todo): Todo =>
  todo.id === id ? { ...todo, title } : todo;

export const withCompletedAs = (completed: boolean) => (todo: Todo): Todo => ({
  ...todo,
  completed
});