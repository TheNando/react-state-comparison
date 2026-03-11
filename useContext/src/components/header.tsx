import { useTodos } from "../todo-context";
import { Input } from "./input";

export function Header() {
  const { addTodo } = useTodos();

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
