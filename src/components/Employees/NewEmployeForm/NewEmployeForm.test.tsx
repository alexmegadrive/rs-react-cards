import { render, screen } from "@testing-library/react";
import NewEmployeForm from "./NewEmployeForm";
import { describe, test, expect, beforeEach } from "vitest";
import Employees from "../../../Pages/Employees/Employees";
import userEvent from "@testing-library/user-event";

describe("Form test", () => {
  beforeEach(() => {
    render(<NewEmployeForm addNewEmploye={Employees.addNewEmploye} />);
  });

  test("should render form", () => {
    expect(screen.getByTestId("form")).toBeDefined();
  });
  test("should show errors on incorrect form when validating", async () => {
    global.URL.createObjectURL = vi.fn();

    const dateInput = screen.getByLabelText(/Date of birth:/i);
    const firstName = screen.getByLabelText(/First name:/i);
    const lastName = screen.getByLabelText(/Last name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const fileInput = screen.getByLabelText(/Upload a photo/i);
    const file = new File(["test"], "test.png", { type: "image/png" });
    const roleSelect = screen.getByRole("combobox");
    const roleOption = screen.getByRole("option", { name: "Manager" });

    await userEvent.type(emailInput, "a@a.test");
    await userEvent.selectOptions(roleSelect, roleOption);
    await userEvent.upload(fileInput, file);
    await userEvent.type(dateInput, "2022-01-01");
    await userEvent.type(dateInput, "2022-01-01");
    await userEvent.type(firstName, "Iv");
    await userEvent.type(lastName, "Iv");

    const previewBtn = screen.getByRole("button", { name: /preview/i });
    await userEvent.click(previewBtn);
    expect(screen.getByText(/Invalid first name/)).toBeDefined();
    expect(screen.getByText(/Invalid last name/)).toBeDefined();
  });
  test("should get preview on correct", async () => {
    global.URL.createObjectURL = vi.fn();
    const dateInput = screen.getByLabelText(/Date of birth:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const firstName = screen.getByLabelText(/First name:/i);
    const lastName = screen.getByLabelText(/Last name:/i);
    const fileInput = screen.getByLabelText(/Upload a photo/i);
    const file = new File(["test"], "test.png", { type: "image/png" });
    const roleSelect = screen.getByRole("combobox");
    const roleOption = screen.getByRole("option", { name: "Manager" });

    await userEvent.selectOptions(roleSelect, roleOption);
    await userEvent.type(firstName, "Ivan");
    await userEvent.type(lastName, "Ivanov");
    await userEvent.type(emailInput, "a@a.test");
    await userEvent.type(dateInput, "01011990");
    await userEvent.upload(fileInput, file);

    const previewBtn = screen.getByRole("button", { name: /preview/i });
    await userEvent.click(previewBtn);
    expect(screen.getByText(/Preview new employe/i)).toBeDefined();
  });
});
