import { fetchProducts } from "@/app/lib/api";
import { ProductCard } from "./ProductCard";

export default async function ShopSSGPage() {
  const products = await fetchProducts();
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
