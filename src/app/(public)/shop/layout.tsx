"use client";

//ctrl+shift+p to open command palette
import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";
const DynamicShopMenu = dynamic(
  () => import("./ShopMenu").then((mod) => mod.ShopMenu),
  { ssr: false, loading: () => <div>Loading...</div> }
);

export default function layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Shop</h1>
      <DynamicShopMenu />
      {children}
    </div>
  );
}
