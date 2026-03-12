import { addTodo } from "../slice";
import { useAppDispatch } from "../store";
import { Input } from "./input";

export function Header() {
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <h1>todos</h1>
      <Input
        onSubmit={(title) => dispatch(addTodo(title))}
        label="New Todo Input"
        placeholder="What needs to be done?"
      />
    </header>
  );
}
