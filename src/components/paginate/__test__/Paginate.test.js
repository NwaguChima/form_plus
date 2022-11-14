import { render, screen, fireEvent } from "@testing-library/react";
import Paginate from "../Paginate";

const templates = [
  {
    id: 1,
    name: "Template 1",
    description: "Template 1 description",
    link: "https://www.google.com",
  },
];

const setPageTemplates = jest.fn();

describe("Template", () => {
  test("content to be on page", () => {
    render(
      <Paginate templates={templates} setPageTemplates={setPageTemplates} />
    );

    const spanElement = screen.getByTestId("currentPage");

    expect(spanElement).toHaveTextContent("1");
  });

  test("page number should still be one", () => {
    render(
      <Paginate templates={templates} setPageTemplates={setPageTemplates} />
    );

    const buttonElement = screen.getByRole("button", { name: "Next" });

    fireEvent.click(buttonElement);
    const spanElement = screen.getByTestId("currentPage");

    expect(spanElement).toHaveTextContent("1");
  });
});
