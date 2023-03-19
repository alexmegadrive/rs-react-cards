import React from "react";
import { describe, test, expect } from "vitest";
import {
  render,
  screen,
  fireEvent,
  queryByAttribute,
} from "@testing-library/react";
import { products } from "../data/products";
import SearchBar from "../components/Header/Header";

describe("Search tests", () => {
  test("Should render Search component", () => {
    render(<SearchBar />);
    const form = screen.getByLabelText("input") as HTMLFormElement;
    expect(form).toBeDefined();
  });
});
