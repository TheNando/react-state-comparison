import { useSignals } from "@preact/signals-react/runtime";
import cn from "classnames";
import { useLocation } from "react-router-dom";

import {
  clearCompletedTodos,
  hasCompletedTodos,
  remainingTodosCount,
  todos
} from "../store";

export function Footer() {
  useSignals();
  const { pathname: route } = useLocation();
  const todoCount = todos.value.length;
  const activeTodoCount = remainingTodosCount.value;

  if (todoCount === 0) return null;

  return (
    <footer className="footer">
      <span className="todo-count">
        {`${activeTodoCount} ${activeTodoCount === 1 ? "item" : "items"} left!`}
      </span>
      <ul className="filters">
        <li>
          <a className={cn({ selected: route === "/" })} href="#/">
            All
          </a>
        </li>
        <li>
          <a className={cn({ selected: route === "/active" })} href="#/active">
            Active
          </a>
        </li>
        <li>
          <a
            className={cn({ selected: route === "/completed" })}
            href="#/completed"
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        className="clear-completed"
        disabled={!hasCompletedTodos.value}
        onClick={clearCompletedTodos}
      >
        Clear completed
      </button>
    </footer>
  );
}
