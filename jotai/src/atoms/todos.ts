import { atom } from "jotai/vanilla";

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

export const todosAtom = atom<Todo[]>([]);

export const addTodoAtom = atom(null, (get, set, title: string) => {
  set(todosAtom, [...get(todosAtom), newTodo(title)]);
});

export const clearCompletedTodosAtom = atom(null, (get, set) => {
  set(todosAtom, get(todosAtom).filter(isActive));
});

export const hasCompletedTodosAtom = atom((get) =>
  get(todosAtom).some(isCompleted)
);

export const remainingTodosCountAtom = atom(
  (get) => get(todosAtom).filter(isActive).length
);

export const removeTodoAtom = atom(null, (get, set, id: string) => {
  set(todosAtom, get(todosAtom).filter(isNotId(id)));
});

export const toggleAllTodosAtom = atom(null, (get, set, completed: boolean) => {
  set(todosAtom, get(todosAtom).map(withCompletedAs(completed)));
});

export const toggleTodoAtom = atom(null, (get, set, id: string) => {
  set(todosAtom, get(todosAtom).map(toggleIfId(id)));
});

export const updateTodoAtom = atom(
  null,
  (get, set, payload: { id: string; title: string }) => {
    set(todosAtom, get(todosAtom).map(updateIfId(payload.id, payload.title)));
  }
);
