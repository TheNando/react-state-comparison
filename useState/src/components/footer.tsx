import cn from "classnames";
import { type Dispatch, type SetStateAction } from "react";
import { useLocation } from "react-router-dom";

import { isActive, type Todo } from "@/lib";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export function Footer({ todos, setTodos }: Props) {
  const { pathname: route } = useLocation();

  const activeTodos = todos.filter(isActive);
  const removeCompleted = () => setTodos(todos.filter(isActive));

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
