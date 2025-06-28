import { fetchProductsISR } from "@/app/lib/api";
import { ProductCard } from "../ssg/ProductCard";

export default async function ShopISRPage() {
  const products = await fetchProductsISR();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          images={product.images}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
