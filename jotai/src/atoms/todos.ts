import { atom } from "jotai/vanilla";

import { nanoid, type Todo } from "../utils";

export const todosAtom = atom<Todo[]>([]);

export const remainingTodosCountAtom = atom(
  (get) => get(todosAtom).filter((todo) => !todo.completed).length
);

export const hasCompletedTodosAtom = atom((get) =>
  get(todosAtom).some((todo) => todo.completed)
);

export const addTodoAtom = atom(null, (get, set, title: string) => {
  set(todosAtom, [
    ...get(todosAtom),
    {
      id: nanoid(),
      title,
      completed: false
    }
  ]);
});

export const toggleAllTodosAtom = atom(
  null,
  (get, set, completed: boolean) => {
    set(
      todosAtom,
      get(todosAtom).map((todo) =>
        todo.completed !== completed ? { ...todo, completed } : todo
      )
    );
  }
);

export const toggleTodoAtom = atom(null, (get, set, id: string) => {
  set(
    todosAtom,
    get(todosAtom).map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
});

export const removeTodoAtom = atom(null, (get, set, id: string) => {
  set(
    todosAtom,
    get(todosAtom).filter((todo) => todo.id !== id)
  );
});

export const updateTodoAtom = atom(
  null,
  (get, set, payload: { id: string; title: string; }) => {
    set(
      todosAtom,
      get(todosAtom).map((todo) =>
        todo.id === payload.id ? { ...todo, title: payload.title } : todo
      )
    );
  }
);

export const clearCompletedTodosAtom = atom(null, (get, set) => {
  set(
    todosAtom,
    get(todosAtom).filter((todo) => !todo.completed)
  );
});