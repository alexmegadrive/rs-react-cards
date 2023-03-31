import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import NewEmployeForm from "./NewEmployeForm";
import { describe, test, expect, beforeEach } from "vitest";
import Employees from "../../../Pages/Employees/Employees";
import userEvent from "@testing-library/user-event";

describe("Form test", () => {
  let file: File;
  beforeEach(() => {
    const file = new File(["test"], "test.png", { type: "image/png" });

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
    // const file = new File(["test"], "test.jpg", { type: "image/jpg" });
    const roleSelect = screen.getByRole("combobox");
    const roleOption = screen.getByRole("option", { name: "Manager" });

    await userEvent.type(emailInput, "a@a.test");
    await userEvent.selectOptions(roleSelect, roleOption);
    await userEvent.type(dateInput, "01011990");
    await userEvent.type(firstName, "Iv");
    await userEvent.type(lastName, "Iv");
    // await userEvent.upload(fileInput, file);

    const previewBtn = screen.getByRole("button", { name: /preview/i });
    await userEvent.click(previewBtn);
    expect(screen.getByText(/Invalid first name/i)).toBeDefined();
    expect(screen.getByText(/Invalid last name/i)).toBeDefined();
    expect(screen.getByText(/Image is required/i)).toBeDefined();
  });
  test("should get preview on correct details", async () => {
    global.URL.createObjectURL = vi.fn();
    const dateInput = screen.getByLabelText(/Date of birth:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const firstName = screen.getByLabelText(/First name:/i);
    const lastName = screen.getByLabelText(/Last name:/i);
    const roleSelect = screen.getByRole("combobox");
    const roleOption = screen.getByRole("option", { name: "Manager" });
    const fileInput = screen.getByLabelText(/Upload a photo/i);
    const previewBtn = screen.getByRole("button", { name: /preview/i });
    // const fileInput = screen.getByTestId("file");

    const file2 = new File(["testdfsdf"], "test.png", { type: "image/jpg" });
    await userEvent.upload(fileInput, file2);

    // await userEvent.upload(fileInput, file);
    // await act(async () => {
    //   await waitFor(() => {
    //     fireEvent.change(fileInput, {
    //       target: { files: [file] },
    //     });
    //   });
    // });
    await userEvent.selectOptions(roleSelect, roleOption);
    await userEvent.type(firstName, "Ivan");
    await userEvent.type(lastName, "Ivanov");
    await userEvent.type(emailInput, "a@a.test");
    await userEvent.type(dateInput, "01011990");
    // await userEvent.upload(fileInput, file);
    // await fireEvent.change(fileInput, {
    //   target: { files: { item: () => file, length: 1, 0: file } },
    // });
    await userEvent.click(previewBtn);
    expect(screen.getByText(/Preview new employe/i)).toBeDefined();
  });
});
