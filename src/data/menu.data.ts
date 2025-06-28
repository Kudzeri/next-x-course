import { PAGES } from "@/config/pages.config";
import type { IMenuItem } from "@/shared/types/menu-item.interface";

export const MENU_ITEMS: IMenuItem[] = [
  {
    href: PAGES.HOME.href,
    name: "Home",
  },
  {
    href: PAGES.EXPLORE.href,
    name: "Explore",
  },
  {
    href: PAGES.PROFILE_FAKE.href,
    name: "Profile",
  },
  {
    href: PAGES.SHOP.href,
    name: "Shop",
  }
];
