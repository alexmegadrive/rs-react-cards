import { render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";
import About from "./About";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import employeesDB from "../../data/employees";

describe("Employees test", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  });

  test("should render About page", () => {
    expect(screen.getByText("About us")).toBeDefined();
  });
});
