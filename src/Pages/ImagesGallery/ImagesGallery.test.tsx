import { render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import ImagesGallery from "./ImagesGallery";
import userEvent from "@testing-library/user-event";
import { imageSearchApiCall } from "../../api/imageSearchApi";

import { BrowserRouter } from "react-router-dom";

describe("ImagesGallery render", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ImagesGallery />
      </BrowserRouter>
    );
  });

  test("should render equal images ", async () => {
    mock("../../api/imageSearchApi", () => ({ imageSearchApiCall: vi.fn() }));
    imageSearchApiCall.mockImplementation(() => Promise.resolve("test1234"));
    const cards = screen.getAllByTestId("card");
    const employesBtn = screen.getByRole("link", { name: /employees/i });
    await userEvent.click(employesBtn);
    expect(cards).toHaveLength(employeesDB.length);
  });
});
