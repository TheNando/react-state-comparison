import cn from "classnames";
import { useLocation } from "react-router-dom";

import { useTodos } from "../todo-context";

export function Footer() {
  const { pathname: route } = useLocation();
  const { todos, clearCompletedTodos } = useTodos();

  const activeTodos = todos.filter((todo) => !todo.completed);

  if (todos.length === 0) return null;

  return (
    <footer className="footer">
      <span className="todo-count">
        {`${activeTodos.length} ${activeTodos.length === 1 ? "item" : "items"} left!`}
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
        disabled={activeTodos.length === todos.length}
        onClick={clearCompletedTodos}
      >
        Clear completed
      </button>
    </footer>
  );
}
