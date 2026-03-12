import cn from "classnames";
import { useAtomValue, useSetAtom } from "jotai/react";
import { useLocation } from "react-router-dom";

import { todosAtom, toggleAllTodosAtom } from "../atoms/todos";
import { Item } from "./item";

export function Main() {
  const { pathname: route } = useLocation();
  const todos = useAtomValue(todosAtom);
  const toggleAllTodos = useSetAtom(toggleAllTodosAtom);

  const visibleTodos = todos.filter((todo) => {
    if (route === "/active") return !todo.completed;
    if (route === "/completed") return todo.completed;
    return todo;
  });

  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) =>
    toggleAllTodos(e.target.checked);

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
          <Item todo={todo} key={todo.id} />
        ))}
      </ul>
    </main>
  );
}
