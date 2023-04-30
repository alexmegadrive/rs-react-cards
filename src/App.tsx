import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import About from "./Pages/About/About";
import Employees from "./Pages/Employees/Employees";
import ImagesGallery from "./Pages/ImagesGallery/ImagesGallery";
import Main from "./Pages/Main/Main";
import Page404 from "./Pages/Page404/Page404";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ImagesGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/products" element={<Main />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
