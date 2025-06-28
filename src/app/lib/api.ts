import type { Product } from "@/shared/types/product.type";
import { API_URL } from "@/constants";

export const fetchProductsSSG = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}products?limit=10`);
  const data = await res.json();
  return data.products;
};


export const fetchProductsSSR = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}products?limit=10`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.products;
};

export const fetchProductsISR = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}products?limit=10`, {
    next: {
      revalidate: 300,
    },
  });
  const data = await res.json();
  return data.products;
};