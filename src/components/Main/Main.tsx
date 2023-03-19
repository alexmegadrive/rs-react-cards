import React from "react";
import CardsList from "../CardsList/CardsList";
import SearchBar from "../SearchBar/SearchBar";
import { products } from "../../data/products";
import "./main.scss";

export default class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <SearchBar />
        <CardsList products={products} />
      </main>
    );
  }
}
