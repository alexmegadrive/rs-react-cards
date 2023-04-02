import { render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";
import Employees from "./Employees";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";
import employeesDB from "../../data/employees";

describe("Employees test", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Employees />
      </BrowserRouter>
    );
  });

  test("should render equal cards ", async () => {
    const cards = screen.getAllByTestId("card");
    const employesBtn = screen.getByRole("link", { name: /employees/i });
    await userEvent.click(employesBtn);
    expect(cards).toHaveLength(employeesDB.length);
  });
});
