import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren
} from "react";

import {
  isActive,
  isNotId,
  newTodo,
  toggleIfId,
  updateIfId,
  withCompletedAs,
  type Todo
} from "@/lib";

type TodoContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  clearCompletedTodos: () => void;
  removeTodo: (id: string) => void;
  toggleAllTodos: (completed: boolean) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, title: string) => void;
};

const TodoContext = createContext<TodoContextValue | null>(null);

export function TodoProvider({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const value = useMemo<TodoContextValue>(
    () => ({
      todos,
      addTodo: (title) =>
        setTodos((currentTodos) => currentTodos.concat(newTodo(title))),
      clearCompletedTodos: () =>
        setTodos((currentTodos) => currentTodos.filter(isActive)),
      removeTodo: (id) =>
        setTodos((currentTodos) => currentTodos.filter(isNotId(id))),
      toggleAllTodos: (completed) =>
        setTodos((currentTodos) =>
          currentTodos.map(withCompletedAs(completed))
        ),
      toggleTodo: (id) =>
        setTodos((currentTodos) => currentTodos.map(toggleIfId(id))),
      updateTodo: (id, title) =>
        setTodos((currentTodos) => currentTodos.map(updateIfId(id, title)))
    }),
    [todos]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodos() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }

  return context;
}
