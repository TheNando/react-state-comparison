import { useTodoStore } from "../store";
import { Input } from "./input";

export function Header() {
  const addTodo = useTodoStore((state) => state.addTodo);

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
