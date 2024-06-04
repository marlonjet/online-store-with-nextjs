import { render, screen, within, waitFor } from "@testing-library/react";
import Home from "../src/app/page";
import { fetchCategories, fetchProducts } from "../src/lib/funtions";
import { mockProducts } from "../__mocks__/mockProduct";
import { mockCategories } from "../__mocks__/mockData";

jest.mock("../src/lib/funtions");

describe("Home Page", () => {
  //   it("renders all products", () => {});
  it("renders all products", async () => {
    fetchProducts.mockResolvedValue(mockProducts);
    fetchCategories.mockResolvedValue(mockCategories);

    render(<Home />);

    await waitFor(async () => {
      const allProducts = await screen.getByRole("list", { name: /products/i });

      const { getAllByRole } = within(allProducts);
      const listItems = getAllByRole("listitem");
      // Check if the number of list items is 4
      expect(listItems.length).toBe(4);
    });
  });
  //   it("renders all categories", () => {});
  //   it("renders one product by category", () => {});
});
