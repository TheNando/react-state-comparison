import { type Dispatch, type SetStateAction } from "react";

import { nanoid, type Todo } from "../utils";
import { Input } from "./input";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export function Header({ todos, setTodos }: Props) {
  const addItem = (title: string) =>
    setTodos([
      ...todos,
      {
        id: nanoid(),
        title,
        completed: false
      }
    ]);

  return (
    <header className="header">
      <h1>todos</h1>
      <Input
        onSubmit={addItem}
        label="New Todo Input"
        placeholder="What needs to be done?"
      />
    </header>
  );
}
