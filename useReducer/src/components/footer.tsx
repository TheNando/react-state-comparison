import cn from "classnames";
import { type Dispatch } from "react";
import { useLocation } from "react-router-dom";

import { CLEAR_COMPLETED_TODOS, type Action, type Todo } from "../utils";

type Props = {
  todos: Todo[];
  dispatch: Dispatch<Action>;
};

export function Footer({ todos, dispatch }: Props) {
  const { pathname: route } = useLocation();

  const activeTodos = todos.filter((todo) => !todo.completed);
  const removeCompleted = () => dispatch({ type: CLEAR_COMPLETED_TODOS });

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
        onClick={removeCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}
