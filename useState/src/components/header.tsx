import { type Dispatch, type SetStateAction } from "react";

import { newTodo, type Todo } from "@/lib";
import { Input } from "./input";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

export function Header({ todos, setTodos }: Props) {
  const addItem = (title: string) => setTodos([...todos, newTodo(title)]);

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
