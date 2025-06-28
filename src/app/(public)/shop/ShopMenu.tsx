"use client";

import { MenuItem } from "@/components/MenuItem";
import { PAGES } from "@/config/pages.config";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";

export function ShopMenu() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4 mb-5">
      <MenuItem
        menuItem={{
          href: PAGES.SHOP.href,
          name: PAGES.SHOP.title,
        }}
        isActive={!!match(PAGES.SHOP.href)(pathname)}
      />
      <MenuItem
        menuItem={{
          href: PAGES.SSG.href,
          name: PAGES.SSG.title,
        }}
        isActive={!!match(PAGES.SSG.href)(pathname)}
      />
      <MenuItem
        menuItem={{
          href: PAGES.ISR.href,
          name: PAGES.ISR.title,
        }}
        isActive={!!match(PAGES.ISR.href)(pathname)}
      />
    </nav>
  );
}
