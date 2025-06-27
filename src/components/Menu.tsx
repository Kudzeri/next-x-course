"use client";
import { MENU_ITEMS } from "@/data/menu.data";
import { usePathname } from "next/navigation";
import { MenuItem } from "./MenuItem";

export function Menu() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {MENU_ITEMS.map((item) => (
        <MenuItem
          key={item.name}
          menuItem={item}
          isActive={pathname === item.href}
        />
      ))}
    </nav>
  );
}
