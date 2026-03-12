import { createRoot } from "react-dom/client";
import { Provider } from "jotai/react";
import { HashRouter, Route, Routes } from "react-router-dom";

import { App } from "./src/app";

import "todomvc-app-css/index.css";
import "todomvc-common/base.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Provider>
    <HashRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </Provider>
);
