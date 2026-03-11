import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren
} from "react";

import { nanoid, type Todo } from "./utils";

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
        setTodos((currentTodos) =>
          currentTodos.concat({
            id: nanoid(),
            title,
            completed: false
          })
        ),
      clearCompletedTodos: () =>
        setTodos((currentTodos) =>
          currentTodos.filter((todo) => !todo.completed)
        ),
      removeTodo: (id) =>
        setTodos((currentTodos) =>
          currentTodos.filter((todo) => todo.id !== id)
        ),
      toggleAllTodos: (completed) =>
        setTodos((currentTodos) =>
          currentTodos.map((todo) =>
            todo.completed !== completed ? { ...todo, completed } : todo
          )
        ),
      toggleTodo: (id) =>
        setTodos((currentTodos) =>
          currentTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        ),
      updateTodo: (id, title) =>
        setTodos((currentTodos) =>
          currentTodos.map((todo) =>
            todo.id === id ? { ...todo, title } : todo
          )
        )
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
