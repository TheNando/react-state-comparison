import { useState } from "react";

import type { Todo } from "@/lib";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { List } from "./components/list";

import "./app.css";

export function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <Header todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
      <Footer todos={todos} setTodos={setTodos} />
    </>
  );
}
