import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  test("content to be on page", () => {
    render(<Header />);

    const divElement = screen.getByRole("heading");

    expect(divElement).toBeInTheDocument();
  });
});
