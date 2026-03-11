import { expect, test } from "bun:test";

import reducer, {
  addTodo,
  clearCompletedTodos,
  removeTodo,
  toggleAllTodos,
  toggleTodo,
  updateTodo
} from "./todo-slice";
import { type Todo } from "./utils";

test("addTodo creates a new incomplete todo", () => {
  const state = reducer([], addTodo("Write tests"));

  expect(state).toHaveLength(1);
  expect(state[0]).toMatchObject({ title: "Write tests", completed: false });
  expect(state[0]?.id).toEqual(expect.any(String));
});

test("todo reducers update existing state correctly", () => {
  const initialState: Todo[] = [
    { id: "1", title: "First todo", completed: false },
    { id: "2", title: "Second todo", completed: true }
  ];

  const toggled = reducer(initialState, toggleTodo("1"));
  const updated = reducer(toggled, updateTodo({ id: "1", title: "Updated todo" }));
  const completed = reducer(updated, toggleAllTodos(true));
  const trimmed = reducer(completed, clearCompletedTodos());
  const removed = reducer(updated, removeTodo("2"));

  expect(updated[0]).toMatchObject({ id: "1", title: "Updated todo", completed: true });
  expect(completed.every((todo) => todo.completed)).toBe(true);
  expect(trimmed).toEqual([]);
  expect(removed).toEqual([{ id: "1", title: "Updated todo", completed: true }]);
});