import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./Pages/Main/Main";
function App() {
  return (
    <>
      <Header location="main" />
      <Main />
    </>
  );
}

export default App;
