import { useState } from "react";

import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import type { Todo } from "./utils";

import "./app.css";

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <Header todos={todos} setTodos={setTodos} />
      <Main todos={todos} setTodos={setTodos} />
      <Footer todos={todos} setTodos={setTodos} />
    </>
  );
}
