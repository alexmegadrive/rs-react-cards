import React from "react";
import "./App.css";
import Main from "./Pages/Main/Main";
import About from "./Pages/About/About";
import Page404 from "./Pages/Page404/Page404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
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

  return <RouterProvider router={router} />;
}

export default App;
