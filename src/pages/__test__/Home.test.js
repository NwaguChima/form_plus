import { render, screen } from "@testing-library/react";
import Home from "../Home.jsx";

test("main content on page", () => {
  render(<Home />);

  const linkElement = screen.getByRole("main");

  expect(linkElement).toBeInTheDocument();
});
