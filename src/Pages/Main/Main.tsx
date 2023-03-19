import React from "react";
import CardsList from "../../components/CardsList/CardsList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { products } from "../../data/products";
import Header from "../../components/Header/Header";
import "./main.scss";

export default class Main extends React.Component {
  state = {
    filteredProducts: products,
  };
  filterProductsFunc = this.filterProducts.bind(this);

  filterProducts(value: string) {
    this.setState({
      filteredProducts: products.filter((product) => {
        return product.title.toLocaleLowerCase().includes(value.toLowerCase());
      }),
    });
  }

  render() {
    return (
      <>
        <Header />
        <main className="main">
          <SearchBar filterProducts={this.filterProductsFunc} />
          <CardsList products={this.state.filteredProducts} />
        </main>
      </>
    );
  }
}
