import cn from "classnames";
import { useAtomValue, useSetAtom } from "jotai/react";
import { useLocation } from "react-router-dom";

import {
  clearCompletedTodosAtom,
  hasCompletedTodosAtom,
  remainingTodosCountAtom,
  todosAtom
} from "../atoms/todos";

export function Footer() {
  const { pathname: route } = useLocation();

  const todos = useAtomValue(todosAtom);
  const remainingTodosCount = useAtomValue(remainingTodosCountAtom);
  const hasCompletedTodos = useAtomValue(hasCompletedTodosAtom);
  const clearCompletedTodos = useSetAtom(clearCompletedTodosAtom);

  if (todos.length === 0) return null;

  return (
    <footer className="footer">
      <span className="todo-count">
        {`${remainingTodosCount} ${remainingTodosCount === 1 ? "item" : "items"} left!`}
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
        disabled={!hasCompletedTodos}
        onClick={clearCompletedTodos}
      >
        Clear completed
      </button>
    </footer>
  );
}
