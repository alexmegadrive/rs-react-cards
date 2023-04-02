import React, { useState } from "react";
import CardsList from "../../components/CardsList/CardsList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { products, IProduct } from "../../data/products";
import Header from "../../components/Header/Header";
import "./main.scss";

const Main = () => {
  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(products);

  const filterProducts = (value: string) => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLocaleLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <>
      <Header />
      <main className="main">
        <SearchBar filterProducts={filterProducts} />
        <CardsList products={filteredProducts} />
      </main>
    </>
  );
};

export default Main;
