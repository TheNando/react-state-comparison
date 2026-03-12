import cn from "classnames";
import { type Dispatch, type SetStateAction } from "react";
import { useLocation } from "react-router-dom";

import {
  isCompleted,
  isNotId,
  withCompletedAs,
  toggleIfId,
  updateIfId,
  type Todo
} from "@/lib";
import { Item } from "./item";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export function List({ todos, setTodos }: Props) {
  const { pathname: route } = useLocation();

  const visibleTodos = todos.filter((todo) => {
    if (route === "/active") return !todo.completed;
    if (route === "/completed") return todo.completed;
    return todo;
  });

  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodos(todos.map(withCompletedAs(e.target.checked)));

  const toggleItem = (id: string) => setTodos(todos.map(toggleIfId(id)));

  const removeItem = (id: string) => setTodos(todos.filter(isNotId(id)));

  const updateItem = (id: string, title: string) =>
    setTodos(todos.map(updateIfId(id, title)));

  return (
    <main className="main">
      {visibleTodos.length > 0 ? (
        <div className="toggle-all-container">
          <input
            className="toggle-all"
            type="checkbox"
            id="toggle-all"
            checked={visibleTodos.every(isCompleted)}
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
