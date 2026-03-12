import cn from "classnames";
import { type Dispatch } from "react";
import { useLocation } from "react-router-dom";

import { isCompleted, type Todo } from "@/lib";
import { type Action, TOGGLE_ALL_TODOS } from "../actions";
import { Item } from "./item";

type Props = {
  todos: Todo[];
  dispatch: Dispatch<Action>;
};

export function List({ todos, dispatch }: Props) {
  const { pathname: route } = useLocation();

  const visibleTodos = todos.filter((todo) => {
    if (route === "/active") return !todo.completed;
    if (route === "/completed") return todo.completed;
    return todo;
  });

  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: TOGGLE_ALL_TODOS,
      payload: { completed: e.target.checked }
    });

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
        {visibleTodos.map((todo, index) => (
          <Item todo={todo} key={todo.id} dispatch={dispatch} index={index} />
        ))}
      </ul>
    </main>
  );
}
