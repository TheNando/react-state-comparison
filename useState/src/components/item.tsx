import cn from "classnames";
import { useState } from "react";

import { type Todo } from "@/lib";
import { Input } from "./input";

type Props = {
  todo: Todo;
  toggleItem: (id: string) => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, title: string) => void;
};

export const Item = function Item({
  todo,
  toggleItem,
  removeItem,
  updateItem
}: Props) {
  const [isWritable, setIsWritable] = useState(false);
  const { title, completed, id } = todo;

  const handleDoubleClick = () => setIsWritable(true);
  const handleBlur = () => setIsWritable(false);

  const handleUpdate = (title: string) => {
    if (title.length === 0) removeItem(id);
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
              onChange={() => toggleItem(id)}
            />
            <label onDoubleClick={handleDoubleClick}>{title}</label>
            <button className="destroy" onClick={() => removeItem(id)} />
          </>
        )}
      </div>
    </li>
  );
};
