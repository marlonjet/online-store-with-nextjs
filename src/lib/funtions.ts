import commerce from "./commerce";

export async function fetchProducts() {
  try {
    const response = await commerce.products.list();
    const result = await response.data;
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchCategories() {
  try {
    const response = await commerce.categories.list();
    const result = await response.data;
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
