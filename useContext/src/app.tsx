import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { TodoProvider } from "./todo-context";

import "./app.css";

export function App() {
  return (
    <TodoProvider>
      <Header />
      <Main />
      <Footer />
    </TodoProvider>
  );
}
