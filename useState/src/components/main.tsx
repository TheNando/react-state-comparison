import cn from "classnames";
import { type Dispatch, type SetStateAction } from "react";
import { useLocation } from "react-router-dom";

import { type Todo } from "../utils";
import { Item } from "./item";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export function Main({ todos, setTodos }: Props) {
  const { pathname: route } = useLocation();

  const visibleTodos = todos.filter((todo) => {
    if (route === "/active") return !todo.completed;
    if (route === "/completed") return todo.completed;
    return todo;
  });

  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodos(
      todos.map((todo) =>
        todo.completed !== e.target.checked
          ? { ...todo, completed: e.target.checked }
          : todo
      )
    );

  const toggleItem = (id: string) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const removeItem = (id: string) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const updateItem = (id: string, title: string) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));

  return (
    <main className="main">
      {visibleTodos.length > 0 ? (
        <div className="toggle-all-container">
          <input
            className="toggle-all"
            type="checkbox"
            id="toggle-all"
            checked={visibleTodos.every((todo) => todo.completed)}
            onChange={toggleAll}
          />
          <label className="toggle-all-label" htmlFor="toggle-all">
            Toggle All Input
          </label>
        </div>
      ) : null}
      <ul className={cn("todo-list")}>
        {visibleTodos.map((todo) => (
          <Item
            todo={todo}
            key={todo.id}
            toggleItem={toggleItem}
            removeItem={removeItem}
            updateItem={updateItem}
          />
        ))}
      </ul>
    </main>
  );
}
