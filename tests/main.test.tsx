import React from "react";
import { BrowserRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { products } from "../src/data/products";
import SearchBar from "../src/components/SearchBar/SearchBar";
import Header from "../src/components/Header/Header";
import CardsList from "../src/components/CardsList/CardsList";
import { store } from "../src/store/store";
import { Provider } from "react-redux";

describe("SearchBar test", () => {
  const mockFn = vi.fn();

  test("Should render Search component", () => {
    render(
      <Provider store={store}>
        <SearchBar callback={(v: string) => mockFn(v)} queryKey="" />
      </Provider>
    );
    const search = screen.getByRole("textbox") as HTMLFormElement;
    expect(search).toBeDefined();
  });
  test("Input value changes", () => {
    render(
      <Provider store={store}>
        <SearchBar callback={(v: string) => mockFn(v)} queryKey="" />
      </Provider>
    );
    const search = screen.getByRole("textbox") as HTMLFormElement;
    fireEvent.change(search, { target: { value: "TeSt" } });
    expect(search.value).toMatch(/test/i);
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
