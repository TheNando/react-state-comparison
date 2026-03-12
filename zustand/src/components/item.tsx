import cn from "classnames";
import { useState } from "react";

import type { Todo } from "@/lib";
import { useTodoStore } from "../store";
import { Input } from "./input";

type Props = {
  todo: Todo;
};

export const Item = function Item({ todo }: Props) {
  const [isWritable, setIsWritable] = useState(false);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const { title, completed, id } = todo;

  const handleDoubleClick = () => setIsWritable(true);
  const handleBlur = () => setIsWritable(false);

  const handleUpdate = (title: string) => {
    if (title.length === 0) removeTodo(id);
    else updateTodo({ id, title });

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
              onChange={() => toggleTodo(id)}
            />
            <label onDoubleClick={handleDoubleClick}>{title}</label>
            <button className="destroy" onClick={() => removeTodo(id)} />
          </>
        )}
      </div>
    </li>
  );
};
