import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { List } from "./components/list";
import { TodoProvider } from "./context";

import "./app.css";

export function App() {
  return (
    <TodoProvider>
      <Header />
      <List />
      <Footer />
    </TodoProvider>
  );
}
