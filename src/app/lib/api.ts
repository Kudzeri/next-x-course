import type { Product } from "@/shared/types/product.type";
import { API_URL } from "@/constants";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}products?limit=10`);
  const data = await res.json();
  return data.products;
};
