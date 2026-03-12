import { computed, signal } from "@preact/signals-react";

import {
  isActive,
  isCompleted,
  isNotId,
  newTodo,
  toggleIfId,
  updateIfId,
  withCompletedAs,
  type Todo
} from "@/lib";

export const todos = signal<Todo[]>([]);

export const hasCompletedTodos = computed(() => todos.value.some(isCompleted));

export const remainingTodosCount = computed(
  () => todos.value.filter(isActive).length
);

export const addTodo = (title: string) =>
  (todos.value = todos.value.concat(newTodo(title)));

export const clearCompletedTodos = () =>
  (todos.value = todos.value.filter(isActive));

export const removeTodo = (id: string) =>
  (todos.value = todos.value.filter(isNotId(id)));

export const toggleAllTodos = (completed: boolean) =>
  (todos.value = todos.value.map(withCompletedAs(completed)));

export const toggleTodo = (id: string) =>
  (todos.value = todos.value.map(toggleIfId(id)));

export const updateTodo = (payload: { id: string; title: string }) =>
  (todos.value = todos.value.map(updateIfId(payload.id, payload.title)));
