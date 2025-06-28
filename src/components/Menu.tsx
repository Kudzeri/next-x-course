"use client";
import { MENU_ITEMS } from "@/data/menu.data";
import { usePathname } from "next/navigation";
import { MenuItem } from "./MenuItem";
import { match } from "path-to-regexp";

export function Menu() {
  const pathname = usePathname();
  // const segment = useSelectedLayoutSegment(); //корневая часть пути

  return (
    <nav className="flex gap-6">
      {MENU_ITEMS.map((item) => (
        <MenuItem
          key={item.name}
          menuItem={item}
          isActive={!!match(item.href)(pathname)}
        />
      ))}
    </nav>
  );
}
