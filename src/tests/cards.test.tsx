import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { products } from "../data/products";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import CardsList from "../components/CardsList/CardsList";

describe("SearchBar test", () => {
  test("Should render Search component", () => {
    render(<SearchBar filterProducts={(v: string) => console.log(1)} />);
    const search = screen.getByRole("textbox") as HTMLFormElement;
    expect(search).toBeDefined();
  });
});

describe("Header test", () => {
  test("Should render Header component", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const logo = screen.getByAltText("logo") as HTMLFormElement;
    expect(logo).toBeDefined();
  });
});
describe("Cardslist test", () => {
  test("Should render empty cardslist", () => {
    render(<CardsList products={[]} />);
    const empty = screen.getByText("No items found") as HTMLFormElement;
    expect(empty).toBeDefined();
  });
  test("Should render correct cardslist", () => {
    const { container } = render(<CardsList products={products} />);
    const cards = container.querySelectorAll("li");
    expect(cards.length).toBe(products.length);
  });
});
