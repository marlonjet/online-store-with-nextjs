"use client";
import { useEffect, useState, useCallback } from "react";
import { fetchConflict } from "../lib/funtions";
export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchAllProducts = useCallback(async () => {
    try {
      const response = await fetchConflict();

      if (response) {
        setProducts(response);
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <main className="grid place-content-center place-self-center h-screen">
      <div>
        <input
          role="searchbox"
          type="text"
          title="Search"
          placeholder="Search products"
        />
        <h2>All products</h2>
      </div>
    </main>
  );
}
