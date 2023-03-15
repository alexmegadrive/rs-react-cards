import React from "react";
import CardsList from "../CardsList/CardsList";
import SearchBar from "../SearchBar/SearchBar";
import "./main.scss";

export default class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <SearchBar />
        <CardsList />
      </main>
    );
  }
}
