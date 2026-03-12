import { expect, test } from "bun:test";
import { createStore } from "jotai/vanilla";

import {
  addTodoAtom,
  clearCompletedTodosAtom,
  hasCompletedTodosAtom,
  remainingTodosCountAtom,
  removeTodoAtom,
  todosAtom,
  toggleAllTodosAtom,
  toggleTodoAtom,
  updateTodoAtom
} from "./todos";

test("addTodoAtom creates a new incomplete todo", () => {
  const store = createStore();

  store.set(addTodoAtom, "Write tests");

  const todos = store.get(todosAtom);

  expect(todos).toHaveLength(1);
  expect(todos[0]).toMatchObject({ title: "Write tests", completed: false });
  expect(todos[0]?.id).toEqual(expect.any(String));
});

test("todo atoms update existing state correctly", () => {
  const store = createStore();

  store.set(todosAtom, [
    { id: "1", title: "First todo", completed: false },
    { id: "2", title: "Second todo", completed: false }
  ]);

  store.set(toggleTodoAtom, "1");
  store.set(updateTodoAtom, { id: "1", title: "Updated todo" });

  const updatedTodos = store.get(todosAtom);
  const updatedRemainingTodosCount = store.get(remainingTodosCountAtom);
  const updatedHasCompletedTodos = store.get(hasCompletedTodosAtom);

  store.set(toggleAllTodosAtom, true);
  const completedTodos = store.get(todosAtom);

  store.set(clearCompletedTodosAtom);
  const trimmedTodos = store.get(todosAtom);

  store.set(todosAtom, updatedTodos);
  store.set(removeTodoAtom, "2");
  const removedTodos = store.get(todosAtom);

  expect(updatedTodos[0]).toMatchObject({
    id: "1",
    title: "Updated todo",
    completed: true
  });
  expect(updatedRemainingTodosCount).toBe(1);
  expect(updatedHasCompletedTodos).toBe(true);
  expect(completedTodos.every((todo) => todo.completed)).toBe(true);
  expect(trimmedTodos).toEqual([]);
  expect(removedTodos).toEqual([
    { id: "1", title: "Updated todo", completed: true }
  ]);
});