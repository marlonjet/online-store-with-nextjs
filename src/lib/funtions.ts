import commerce from "./commerce";

export async function fetchConflict() {
  try {
    const response = await commerce.products.list();
    const result = await response.data;
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
