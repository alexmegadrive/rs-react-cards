import { render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";
import Page404 from "./Page404";
import { BrowserRouter } from "react-router-dom";

describe("Form test", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );
  });

  test("should render 404 page", () => {
    expect(screen.getByText("OOPS 404 ERROR")).toBeDefined();
  });
});
