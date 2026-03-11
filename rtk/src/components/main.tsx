import cn from "classnames";
import { useLocation } from "react-router-dom";

import { toggleAllTodos } from "../todo-slice";
import { useAppDispatch, useAppSelector } from "../store";
import { Item } from "./item";

export function Main() {
  const { pathname: route } = useLocation();
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);

  const visibleTodos = todos.filter((todo) => {
    if (route === "/active") return !todo.completed;
    if (route === "/completed") return todo.completed;
    return todo;
  });

  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(toggleAllTodos(e.target.checked));

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
