import { render, screen } from "@testing-library/react";
import Template from "../Template";

const template = {
  id: 1,
  name: "Template 1",
  description: "Template 1 description",
  link: "https://www.google.com",
};

describe("Template", () => {
  test("content to be on page", () => {
    const { id, title, description, name } = template;
    render(
      <Template id={id} title={title} description={description} name={name} />
    );

    const divElement = screen.getByTestId("template");

    expect(divElement).toBeInTheDocument();
  });

  test("name to be value passed", () => {
    const { id, title, description, name } = template;

    render(
      <Template id={id} title={title} description={description} name={name} />
    );

    const divElement = screen.getByTestId("template");

    expect(divElement).toHaveTextContent("Template 1");
  });

  test("description to be value passed", () => {
    const { id, title, description, name } = template;

    render(
      <Template id={id} title={title} description={description} name={name} />
    );

    const divElement = screen.getByTestId("template");

    expect(divElement).toHaveTextContent("Template 1 description");
  });
});
