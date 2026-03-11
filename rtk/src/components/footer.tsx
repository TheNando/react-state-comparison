import cn from "classnames";
import { useLocation } from "react-router-dom";

import { clearCompletedTodos } from "../todo-slice";
import { useAppDispatch, useAppSelector } from "../store";

export function Footer() {
  const { pathname: route } = useLocation();
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);

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
        onClick={() => dispatch(clearCompletedTodos())}
      >
        Clear completed
      </button>
    </footer>
  );
}
