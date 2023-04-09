import React from "react";
import "./App.css";
import Main from "./Pages/Main/Main";
import About from "./Pages/About/About";
import Page404 from "./Pages/Page404/Page404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Employees from "./Pages/Employees/Employees";
import ImagesGallery from "./Pages/ImagesGallery/ImagesGallery";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/imagesearch",
        element: <ImagesGallery />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
    { basename: "/rs-react-cards/" }
  );

  return <RouterProvider router={router} />;
}

export default App;
