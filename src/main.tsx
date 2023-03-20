import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./Pages/About/About";
import Page404 from "./Pages/Page404/Page404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import "normalize.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);
<RouterProvider router={router} />;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
