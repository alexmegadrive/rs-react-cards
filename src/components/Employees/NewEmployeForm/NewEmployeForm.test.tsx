import { render, screen, waitFor, act } from "@testing-library/react";
import NewEmployeForm from "./NewEmployeForm";
import { describe, test, expect, beforeEach } from "vitest";
import { IEmployeCard } from "../EmployeesList/EmployeesList";
import Employees from "../../../Pages/Employees/Employees";
import userEvent from "@testing-library/user-event";

describe("Form test", () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let file: File;
  beforeEach(() => {
    file = new File(["test"], "test.png", { type: "image/png" });
    render(
      <NewEmployeForm addNewEmploye={(e: IEmployeCard) => console.log(e)} />
    );
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

    const roleSelect = screen.getByRole("combobox");
    const roleOption = screen.getByRole("option", { name: "Manager" });
    const previewBtn = screen.getByRole("button", { name: /preview/i });
    await userEvent.click(previewBtn);
    expect(screen.getByText(/first name is required/i)).toBeDefined();
    await userEvent.type(firstName, "Ivan");
    await userEvent.type(lastName, "Iv");
    await userEvent.type(emailInput, "a@a.test");
    await userEvent.selectOptions(roleSelect, roleOption);
    await userEvent.clear(dateInput);
    await userEvent.type(dateInput, "1991-01-01");
    await userEvent.click(previewBtn);
    expect(screen.getByText(/Invalid last name/i)).toBeDefined();
    expect(screen.getByText(/image is required/i)).toBeDefined();
  });
  test("should get preview on correct details", async () => {
    global.URL.createObjectURL = vi.fn();
    const dateInput = screen.getByLabelText(/Date of birth:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const firstName = screen.getByLabelText(/First name:/i);
    const lastName = screen.getByLabelText(/Last name:/i);
    const roleSelect = screen.getByRole("combobox");
    const roleOption = screen.getByRole("option", { name: "Manager" });
    const fileInput = screen.getByLabelText(
      /Upload a photo/i
    ) as HTMLInputElement;
    const previewBtn = screen.getByRole("button", { name: /preview/i });

    const file3 = new File(["testdfsdf"], "test.png", { type: "image/png" });

    await act(async () => {
      await userEvent.upload(fileInput, file3);
    });
    await waitFor(() => expect(fileInput.files).toHaveLength(1));

    await userEvent.selectOptions(roleSelect, roleOption);
    await userEvent.type(firstName, "Ivan");
    await userEvent.type(lastName, "Ivanov");
    await userEvent.type(emailInput, "a@a.test");
    await userEvent.type(dateInput, "1990-01-01");
    await userEvent.click(previewBtn);
    expect(screen.getByText(/Preview/i)).toBeDefined();
  });
});
