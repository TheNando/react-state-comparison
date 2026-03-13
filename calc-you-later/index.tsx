import { createRoot } from "react-dom/client";

import { App } from "./src/app";
import { Reactive } from "./src/reactive";

const container = document.getElementById("root");
const root = createRoot(container!);

const isReactive =
  new URLSearchParams(window.location.search).get("reactive") === "true";

root.render(isReactive ? <Reactive /> : <App />);
