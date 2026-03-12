import cn from "classnames";
import { useState } from "react";

import type { Todo } from "@/lib";
import { removeTodo, toggleTodo, updateTodo } from "../slice";
import { useAppDispatch } from "../store";
import { Input } from "./input";

type Props = {
  todo: Todo;
};

export const Item = function Item({ todo }: Props) {
  const [isWritable, setIsWritable] = useState(false);
  const dispatch = useAppDispatch();
  const { title, completed, id } = todo;

  const handleDoubleClick = () => setIsWritable(true);
  const handleBlur = () => setIsWritable(false);

  const handleUpdate = (title: string) => {
    if (title.length === 0) dispatch(removeTodo(id));
    else dispatch(updateTodo({ id, title }));

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
              onChange={() => dispatch(toggleTodo(id))}
            />
            <label onDoubleClick={handleDoubleClick}>{title}</label>
            <button
              className="destroy"
              onClick={() => dispatch(removeTodo(id))}
            />
          </>
        )}
      </div>
    </li>
  );
};
