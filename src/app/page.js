import { fetchProducts, fetchCategories } from "../lib/funtions";

export default async function Home() {
  const productsData = fetchProducts();
  const categoriesData = fetchCategories();

  // Wait for the promises to resolve
  const [products, categories] = await Promise.all([
    productsData,
    categoriesData,
  ]);

  return (
    <main className="grid place-content-center place-self-center h-screen">
      <div>
        <input
          role="searchbox"
          type="text"
          title="Search"
          placeholder="Search products"
        />
        <ul aria-label="Categories" className="flex flex-wrap gap-4">
          {categories.map((category) => {
            return (
              <li
                aria-label="category"
                key={category.id}
                className="bg-gray-100 py-2 px-4 rounded-full"
              >
                <h5
                  className="text-sm font-semibold"
                  id={`category-${category.name}`}
                >
                  {category.name}
                </h5>
              </li>
            );
          })}
        </ul>
        <div>
          <h2 id="all-products-heading">All products</h2>
          <ul
            aria-labelledby="all-products-heading"
            className="grid grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <li key={product?.id}>
                <div>
                  <h3>{product?.name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
