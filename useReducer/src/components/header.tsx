import { type Dispatch } from "react";

import { ADD_TODO, type Action } from "../utils";
import { Input } from "./input";

type Props = {
  dispatch: Dispatch<Action>;
};

export function Header({ dispatch }: Props) {
  const addItem = (title: string) =>
    dispatch({ type: ADD_TODO, payload: { title } });

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
