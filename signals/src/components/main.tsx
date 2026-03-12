import cn from "classnames";
import { type ChangeEvent } from "react";
import { useSignals } from "@preact/signals-react/runtime";
import { useLocation } from "react-router-dom";

import { isCompleted } from "@/lib";
import { todos, toggleAllTodos } from "../store";
import { Item } from "./item";

export function Main() {
  useSignals();
  const { pathname: route } = useLocation();

  const visibleTodos = todos.value.filter((todo) => {
    if (route === "/active") return !todo.completed;
    if (route === "/completed") return todo.completed;
    return todo;
  });

  const toggleAll = (e: ChangeEvent<HTMLInputElement>) => {
    toggleAllTodos(e.target.checked);
  };

  return (
    <main className="main">
      {todos.value.length > 0 ? (
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
          <Item todo={todo} key={todo.id} />
        ))}
      </ul>
    </main>
  );
}
