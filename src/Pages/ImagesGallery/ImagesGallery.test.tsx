import { render, screen } from "@testing-library/react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import ImagesGallery from "./ImagesGallery";
import userEvent from "@testing-library/user-event";
import { imageSearchApiCall } from "../../api/imageSearchApi";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";

describe("ImagesGallery render", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ImagesGallery />
      </BrowserRouter>
    );
  });

  test("should render equal images ", async () => {
    vi.mock("react-query", async () => ({
      useQuery: () => ({
        isLoading: false,
        error: {},
        data: {
          images: [
            {
              url: "https://pixabay.com/get/g25d95b37266e56d57dc3d4ed496f62c025e432370685dee0a14763fad052497af4451b8c6f890bbc66f611c1b81de4918c6d76db0c35cc6f75c8088269c197e6_1280.jpg",
              id: 1093758,
              alt: "kids, girl, pencil",
              author: "klimkin",
            },
            {
              url: "https://pixabay.com/get/gfb4dbe02d2d099be91cd61e86a73e3bf9bce316b746da293b7f8886749b6658fba75f8d8614b43299a30e5c25c074216f48e239be5788aa61d32b79cb52f86ed_1280.png",
              id: 160168,
              alt: "kids, students, back to school",
              author: "OpenClipart-Vectors",
            },
          ],
          total: 500,
        },
      }),
    }));

    render(
      <BrowserRouter>
        <ImagesGallery />
      </BrowserRouter>
    );
    const cards = screen.getAllByTestId("image-card");

    expect(cards).toHaveLength(4);
  });
});
