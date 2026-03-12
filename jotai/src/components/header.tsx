import { useSetAtom } from "jotai/react";

import { addTodoAtom } from "../atoms/todos";
import { Input } from "./input";

export function Header() {
  const addTodo = useSetAtom(addTodoAtom);

  return (
    <header className="header">
      <h1>todos</h1>
      <Input
        onSubmit={addTodo}
        label="New Todo Input"
        placeholder="What needs to be done?"
      />
    </header>
  );
}
