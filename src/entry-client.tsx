import React from "react";
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
console.log("hydrated");
