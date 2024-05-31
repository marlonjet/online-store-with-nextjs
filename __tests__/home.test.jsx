import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../src/app/page";

describe("Home Page", () => {
  it("render  all products heading", () => {
    render(<Home />);
    screen.getByRole("heading", { name: /All products/i });
  });

  it("should render an accesible Search Box", () => {
    render(<Home />);
    const searchInput = screen.getByRole("searchbox");
    screen.getByRole("heading", { name: /All products/i });
    expect(searchInput).toHaveAccessibleName("Search");
  });

  //   it("renders all products", () => {});
  //   it("renders all categories", () => {});
  //   it("renders one product by category", () => {});
});
