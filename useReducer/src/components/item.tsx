import cn from "classnames";
import { memo, useState, type Dispatch } from "react";

import {
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  type Action,
  type Todo
} from "../utils";
import { Input } from "./input";

type Props = {
  todo: Todo;
  dispatch: Dispatch<Action>;
  index: number;
};

export const Item = memo(function Item({ todo, dispatch }: Props) {
  const [isWritable, setIsWritable] = useState(false);
  const { title, completed, id } = todo;

  const toggleItem = () => dispatch({ type: TOGGLE_TODO, payload: { id } });
  const removeItem = () => dispatch({ type: REMOVE_TODO, payload: { id } });
  const updateItem = (id: string, title: string) =>
    dispatch({ type: UPDATE_TODO, payload: { id, title } });
  const handleDoubleClick = () => setIsWritable(true);
  const handleBlur = () => setIsWritable(false);

  const handleUpdate = (title: string) => {
    if (title.length === 0) removeItem();
    else updateItem(id, title);

    setIsWritable(false);
  };

  return (
    <li className={cn({ completed: todo.completed })}>
      <div className="view">
        {isWritable ? (
          <Input
            onSubmit={handleUpdate}
            label="Edit Todo Input"
            defaultValue={title}
            onBlur={handleBlur}
          />
        ) : (
          <>
            <input
              className="toggle"
              type="checkbox"
              checked={completed}
              onChange={toggleItem}
            />
            <label onDoubleClick={handleDoubleClick}>{title}</label>
            <button className="destroy" onClick={removeItem} />
          </>
        )}
      </div>
    </li>
  );
});
